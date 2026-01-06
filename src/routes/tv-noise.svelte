<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
		options?: {
			baseAlpha?: number;
			flickerVariation?: number;
			scaleFactor?: number;
		};
	};

	let { class: className, options }: Props = $props();

	let noiseCanvas: HTMLCanvasElement | null = $state(null);

	onMount(() => {
		if (!noiseCanvas) return;

		// 2D contexts that are guaranteed non-null after initialization
		let ctx!: CanvasRenderingContext2D;
		let offCtx!: CanvasRenderingContext2D;

		const maybeCtx = noiseCanvas.getContext('2d');
		if (!maybeCtx) return;
		ctx = maybeCtx;

		let animationFrameId = 0;
		const baseAlpha = options?.baseAlpha ?? 0.06;
		const flickerVariation = options?.flickerVariation ?? 0.025;
		const scaleFactor = options?.scaleFactor ?? 2.5; // render at 1/3 resolution for performance

		// Offscreen low-res buffer
		const offscreen = document.createElement('canvas');
		const maybeOffCtx = offscreen.getContext('2d');
		if (!maybeOffCtx) return;
		offCtx = maybeOffCtx;
		let imageData = offCtx.createImageData(1, 1);

		function resize() {
			const width = window.innerWidth;
			const height = window.innerHeight;
			noiseCanvas!.width = width;
			noiseCanvas!.height = height;

			offscreen.width = Math.max(1, Math.floor(width / scaleFactor));
			offscreen.height = Math.max(1, Math.floor(height / scaleFactor));
			imageData = offCtx.createImageData(offscreen.width, offscreen.height);
		}

		function render() {
			const data = imageData.data;
			// Monochrome noise
			for (let i = 0; i < data.length; i += 4) {
				const v = (Math.random() * 255) | 0;
				data[i] = v;
				data[i + 1] = v;
				data[i + 2] = v;
				data[i + 3] = 255;
			}
			offCtx.putImageData(imageData, 0, 0);

			// Draw scaled with no smoothing
			ctx.clearRect(0, 0, noiseCanvas!.width, noiseCanvas!.height);
			ctx.imageSmoothingEnabled = false;
			ctx.globalAlpha = baseAlpha + Math.random() * flickerVariation;
			ctx.drawImage(offscreen, 0, 0, noiseCanvas!.width, noiseCanvas!.height);
			ctx.globalAlpha = 1;

			animationFrameId = requestAnimationFrame(render);
		}

		const onResize = () => {
			resize();
		};

		window.addEventListener('resize', onResize);
		resize();
		render();

		onDestroy(() => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', onResize);
		});
	});
</script>

<canvas
	bind:this={noiseCanvas}
	class="pointer-events-none absolute inset-0 z-10 mix-blend-overlay {className}"
></canvas>
