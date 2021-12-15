<!--JAVASCRIPT-->
<script>
	const cactusSizes = ['cactus--xl', 'cactus--t', 'cactus--l'];
</script>

<!--HEAD-->
<svelte:head>
	<title>THIS PROJECT IS NOT ONLINE</title>
</svelte:head>

<!--HTML-->
<main>
	<div class="tumbleweed">
		<img src="/icons/tumbleweed.svg" alt="tumbleweed" />
	</div>

	{#each cactusSizes as size}
		<div class={`cactus ${size}`}>
			<img src="/icons/cactus.svg" alt="cactus" />
		</div>
	{/each}

	<h1>Sorry, this project is not hosted yet</h1>
</main>

<!--CSS-->
<style>
	@keyframes roll {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes bounce {
		0%,
		10% {
			bottom: 15%;
		}
		100% {
			bottom: 0%;
		}
	}

	@keyframes rock {
		0% {
			right: -20%;
		}
		100% {
			right: 110%;
		}
	}

	.tumbleweed,
	.tumbleweed img {
		width: 10em;
		height: 10rem;
		position: absolute;
		bottom: 0;
		animation: bounce 1s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite alternate,
			roll 3s linear infinite;
	}

	.cactus {
		position: absolute;
		bottom: 0;
		border-radius: 50% 50% 0 0;
		animation: rock linear infinite;
		--base-size: 5rem;
	}

	.cactus--t {
		width: var(--base-size);
		height: var(--base-size);
		animation-duration: 1s;
	}

	.cactus--l {
		width: calc(var(--base-size) + 1rem);
		height: calc(var(--base-size) + 1rem);
		animation-duration: 2s;
	}

	.cactus--xl {
		width: calc(var(--base-size) + 2rem);
		height: calc(var(--base-size) + 2rem);
		animation-duration: 3s;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		position: relative;
		overflow: none;
	}

	h1 {
		color: var(--black);
		font-size: 3rem;
		text-align: center;
	}
</style>
