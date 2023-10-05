<script lang="ts">
	let cursorX = 0;
	let cursorY = 0;

	let iris: HTMLElement;
	let pupil: HTMLElement;

	$: {
		if (iris && pupil) {
			const irisRect = iris.getBoundingClientRect();
			const pupilRect = pupil.getBoundingClientRect();

			const irisCenterX = irisRect.left + irisRect.width / 2;
			const irisCenterY = irisRect.top + irisRect.height / 2;

			const angle = Math.atan2(cursorY - irisCenterY, cursorX - irisCenterX);

			const pupilX = Math.cos(angle) * (irisRect.width / 2 - pupilRect.width / 2);
			const pupilY = Math.sin(angle) * (irisRect.height / 2 - pupilRect.height / 2);

			pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
		}
	}
</script>

<svelte:window
	on:mousemove={({ clientX, clientY }) => {
		cursorX = clientX;
		cursorY = clientY;
	}}
/>

<div class="eye">
	<div bind:this={iris} class="iris">
		<div bind:this={pupil} class="pupil" />
	</div>
</div>

<style lang="postcss">
	.eye {
		background: white;
		width: 8rem;
		height: 8rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		overflow: hidden;
		border-radius: 100% 0;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: blinkEye 5s ease-in-out infinite;
	}

	.iris {
		background: white;
		width: 4rem;
		height: 4rem;
		position: relative;
		border-radius: 100%;
	}

	.pupil {
		background: black;
		border-radius: 50%;
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: transform 0.1s ease-out;
	}
</style>
