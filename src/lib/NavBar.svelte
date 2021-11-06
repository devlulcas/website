<!--JAVASCRIPT---->
<script>
	import NavItem from './NavItem.svelte';
	import ButtonHamburguer from './ButtonHamburguer.svelte';

	let mobile = false;
	const openMenu = () => {
		mobile = !mobile;
	};
</script>

<!--HTML-->
<nav>
	<div class="basic">
		<ButtonHamburguer on:click={openMenu} animate={mobile} />
		<a sveltekit:prefetch href="/">Devlulcas</a>
	</div>
	<ul class:mobile>
		<NavItem href="/skills" faIcon="fas fa-code">Skills</NavItem>
		<NavItem href="/projects" faIcon="fas fa-boxes">Projects</NavItem>
		<NavItem href="/socials" faIcon="fas fa-at">Socials</NavItem>
		<NavItem href="/contact" faIcon="fas fa-hand-sparkles">Hire me</NavItem>
		<NavItem href="https://github.com/devlulcas" faIcon="fa fa-github" external>Github</NavItem>
		<NavItem href="/contact" faIcon="fas fa-file">Curriculum</NavItem>
	</ul>
</nav>

<!--CSS-->
<style>
	nav,
	ul {
		display: flex;
		justify-content: space-between;
	}

	nav {
		padding: 1rem 3rem;
		background: var(--blue);
		align-items: center;
	}

	.basic {
		display: flex;
		height: 100%;
		justify-content: center;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 800;
		font-size: 3.5vw;
		color: var(--white);
		width: 100%;
	}

	ul {
		gap: 2rem;
	}

	.mobile {
		display: flex;
	}

	@media screen and (max-width: 75rem) {
		nav {
			padding: 1rem;
			display: block;
		}

		a {
			text-align: center;
			font-size: 3.5rem;
		}

		ul {
			display: none;
			margin-top: 5vh;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			height: 100vh;
			width: 100%;
			gap: 2vh;
		}
	}
</style>
