<!--TS-->
<script lang="ts">
	export let name: string;
	export let src: string;
</script>

<!--HTML-->
<article>
	<div class="header">
		<div class="circle" />
		<div class="circle" />
		<div class="circle" />
	</div>

	<strong>
		{name}
	</strong>

	<img {src} alt="" srcset="" />
</article>

<!--CSS-->
<style lang="scss">
	article {
		overflow: hidden;
		height: min(17vh, 20vw);
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		flex-direction: column;
		border-radius: 1rem;
		outline: 0.2rem solid var(--on-primary);
		background: var(--secondary);
		cursor: pointer;

		&:hover > img {
			transform: rotateZ(15deg);
			transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		}

		@media screen and (max-width: 70rem) {
			min-width: max-content;
		}
	}

	.header {
		width: 100%;
		padding: 0.25rem;
		gap: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background: var(--on-primary);
	}

	.circle {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;

		&:nth-child(1) {
			background: rgb(255, 60, 60);
		}

		&:nth-child(2) {
			background: rgb(255, 232, 55);
		}

		&:nth-child(3) {
			background: rgb(84, 251, 43);
		}

		@media screen and (max-width: 70rem) {
			width: 0.75rem;
			height: 0.75rem;
		}
	}

	strong {
		width: 100%;
		min-height: 25%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		text-transform: uppercase;
		color: var(--on-secondary);
		font-size: clamp(0.75rem, 1.2rem, 2vw);
	}

	img {
		height: 50%;
		padding: 0.25rem;
		transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}
</style>
