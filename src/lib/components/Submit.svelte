<script lang="ts">
	import FaPaperPlane from '$lib/assets/icons/FaPaperPlane.svelte';
</script>

<!--HTML-->
<div class="button-container">
	<button> send it <FaPaperPlane /></button>
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
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--primary);
		color: var(--on-primary);
		font-size: 1.2rem;
		font-weight: 800;
		padding: 1rem;
		border: 0.2rem solid var(--on-primary);
		border-radius: 0.5rem;
		color: var(--on-primary);
		cursor: pointer;
		transition: 0.5s;

		&:hover {
			color: var(--secondary);
		}
	}
</style>
