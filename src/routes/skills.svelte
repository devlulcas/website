<!--JAVASCRIPT-->
<script>
	const skills = [
		{ icon: 'fab fa-html5', description: 'HTML' },
		{ icon: 'fab fa-css3-alt', description: 'CSS' },
		{ icon: 'fab fa-js-square', description: 'JS' },
		{ icon: 'fab fa-node-js', description: 'NODE JS' },
		{ icon: 'fab fa-android', description: 'ANDROID SDK' },
		{ icon: 'fab fa-linux', description: 'GNU/LINUX' },
		{ icon: 'fab fa-figma', description: 'FIGMA' },
		{ icon: 'fab fa-git-alt', description: 'GIT' },
		{ icon: 'fas fa-code', description: 'KOTLIN' }, //kt
		{ icon: 'fas fa-code', description: 'SQLITE/PG' }, //sql
		{ icon: 'fas fa-code', description: 'SVELTE' }, //svelte
		{ icon: 'fas fa-code', description: 'ENGLISH' } //english
	];
</script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - SKILLS</title>
</svelte:head>

<!--BODY-->
<div>
	<main>
		{#each skills as skill}
			<article>
				<i class={skill.icon} />
				<p>{skill.description}</p>
			</article>
		{/each}
	</main>
</div>

<!--CSS-->
<style>
	main {
		position: absolute;
		height: 91%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		padding: 1rem 2rem;
		background: var(--white);
	}

	article {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: var(--yellow);
		box-shadow: 0.2rem 0.2rem var(--black);
		border-radius: 1rem;
		padding: 5%;
		transition: all 0.3s ease;
	}

	article:hover {
		box-shadow: inset 0.2rem 0.2rem var(--white);
	}

	i {
		color: var(--black);
		font-size: calc(3vh + 3vw);
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
		font-size: 2.3vh;
		font-weight: 800;
		background-color: #000000ab;
		color: var(--white);
		border-radius: 0 0 1.5rem 1.5rem;
		text-align: center;
		transform: translateY(-100%);
		transition: 300ms ease-in;
		word-break: break-all;
	}

	article:hover p {
		transform: translateY(0%);
	}

	@media screen and (min-width: 75rem) {
		main {
			grid-template-columns: 1fr 1fr 1fr 1fr;
			height: 87.9%;
		}

		p {
			font-size: 3.2rem;
		}
	}
</style>
