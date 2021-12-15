<!--JAVASCRIPT-->
<script>
	const skills = [
		{ icon: 'fab fa-html5', description: 'HTML' },
		{ icon: 'fab fa-css3-alt', description: 'CSS' },
		{ icon: 'fab fa-js-square', description: 'JS' },
		{ icon: 'fab fa-node-js', description: 'NODE JS' },
		{ icon: 'fab fa-android', description: 'ANDROID SDK' },
		{ icon: 'fab fa-linux', description: 'GNU/ LINUX' },
		{ icon: 'fab fa-figma', description: 'FIGMA' },
		{ icon: 'fab fa-git-alt', description: 'GIT' },
		{ src: '/icons/kotlin.svg', icon: 'kotlin', description: 'KOTLIN' }, //kt
		{ src: '/icons/sql.svg', icon: 'sqlite', description: 'SQLITE/ PG' }, //sql
		{ src: '/icons/svelte.svg', icon: 'svelte', description: 'SVELTE' }, //svelte
		{ icon: 'fas fa-flag-usa', description: 'ENGLISH' } //english
	];
</script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - SKILLS</title>
</svelte:head>

<!--BODY-->
<div class="container">
	<main>
		{#each skills as skill}
			<article>
				{#if skill.src}
					<img src={skill.src} alt={skill.icon} />
				{:else}
					<i class={skill.icon} />
				{/if}
				<p>{skill.description}</p>
			</article>
		{/each}
	</main>
</div>

<!--CSS-->
<style>
	.container {
		overflow-y: scroll;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		padding: 3rem 4rem;
		background: var(--white);
	}

	article {
		min-height: 20rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: var(--yellow);
		box-shadow: 0.2rem 0.2rem var(--black);
		border-radius: 1rem;
	}

	@keyframes ticko-ticko {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(30deg);
			filter: opacity(0.4);
		}
		50% {
			transform: rotate(-30deg);
		}
		75% {
			transform: rotate(0deg);
		}
	}

	article:hover img,
	article:hover i {
		animation: 1000ms ticko-ticko;
	}

	i,
	img {
		transition: transform 0.3s ease;
	}

	i {
		color: var(--black);
		font-size: calc(3vh + 3vw);
	}

	img {
		height: calc(3vh + 3vw);
	}

	p {
		position: absolute;
		width: 101%;
		height: 101%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding: 5%;
		font-size: 3.3vh;
		font-weight: 800;
		background-color: #000000ab;
		color: var(--white);
		border-radius: 0 0 1.5rem 1.5rem;
		text-align: center;
		transform: translateY(-100%);
		transition: 300ms ease-in;
		word-break: break-word;
	}

	article:hover p {
		transform: translateY(0%);
	}

	@media screen and (min-width: 75rem) {
		.container {
			overflow-y: hidden;
		}
		.container,
		main {
			height: 100%;
		}
		main {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		article {
			min-height: 10rem;
		}
	}
</style>
