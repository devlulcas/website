<div
	title="Arte criada por Kelvin Shadewing & Jordan Irwin (AntumDeluge); http://kyrodianlegends.com/"
	class="penguin"
/>

<style lang="postcss">
	@keyframes walk {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -72px 0;
		}
	}

	/* 72w 26h sprite 24w */
	.penguin {
		position: absolute;
		bottom: 45px;
		right: 45px;
		transform: scale(2);
		width: 24px;
		height: 26px;
		image-rendering: pixelated;
		background-image: url(images/penguin-sprite.png);
		background-repeat: no-repeat;
		animation: walk 500ms steps(3) infinite;
	}
</style>
