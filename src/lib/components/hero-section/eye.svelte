<script lang="ts">
	import { onMount } from 'svelte';

	function getAngle(cx: number, cy: number, ex: number, ey: number) {
		const dy = ey - cy;
		const dx = ex - cx;

		const rad = Math.atan2(dy, dx);

		return (rad * 180) / Math.PI;
	}

	let eyeEl = $state<HTMLDivElement | null>(null);

	let eyeAnchorX = $state(0);
	let eyeAnchorY = $state(0);

	onMount(() => {
		if (!eyeEl) return;
		const rect = eyeEl.getBoundingClientRect();
		eyeAnchorX = rect.left + rect.width / 2;
		eyeAnchorY = rect.top + rect.height / 2;
	});

	let x = $state(0);
	let y = $state(0);
	let angle = $derived(getAngle(x, y, eyeAnchorX, eyeAnchorY));
</script>

<svelte:document
	onmousemove={({ clientX, clientY }) => {
		x = clientX;
		y = clientY;
	}}
/>

<div aria-hidden="true" bind:this={eyeEl} class="eye">
	<div aria-hidden="true" style="transform: rotate({angle}deg)" class="iris">
		<div aria-hidden="true" class="h-6 w-6 rounded-full bg-black"></div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.eye {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 115px;
		height: 115px;
		transform: translate(-50%, -50%);
		background: #fff;
		border-radius: 50% 0 50% 0;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (min-width: 768px) {
			width: 160px;
			height: 160px;
		}
	}

	.iris {
		width: 90px;
		height: 90px;
		background: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		transition: background 0.1s ease-in-out;
	}
</style>
