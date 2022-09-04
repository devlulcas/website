<script lang="ts">
	import FaPaperPlane from '$lib/assets/icons/FaPaperPlane.svelte';
</script>

<!--HTML-->
<div class="button-container">
	<button> send it <FaPaperPlane /></button>
	<div class="divider" />
</div>

<!--CSS-->
<style lang="scss">
	.button-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 2%;
	}

	button {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--primary);
		color: var(--on-primary);
		font-size: 1.2rem;
		font-weight: 800;
		padding: 1rem 1.5rem;
		border: 0.2rem solid var(--on-primary);
		border-radius: 0.5rem;
		z-index: 1;
		color: var(--on-primary);
		cursor: pointer;
		transition: 0.5s;

		@media screen and (max-width: 70rem) {
			width: 80%;
		}

		&:hover {
			color: var(--secondary);

			& + .divider {
				height: 0.5rem;
				width: 80%;
				background: var(--secondary);
			}
		}
	}

	.divider {
		height: 0rem;
		width: 60%;
		border-radius: 5rem;
		position: absolute;
		transition: 0.5s;
		background: var(--primary);
	}
</style>
