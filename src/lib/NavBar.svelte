<script lang="ts">
	import {
		faBrain,
		faCode,
		faFeather,
		faEnvelope,
		faHome
	} from "@fortawesome/free-solid-svg-icons";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

	// My components
	import Switch from "./Switch.svelte";
	import NavItem from "./NavItem.svelte";

	// Anchor and SVG
	const menuItems = [
		{ label: "Home", icon: faHome },
		{ label: "Projects", icon: faCode },
		{ label: "Skills", icon: faBrain },
		{ label: "Contact", icon: faEnvelope },
		{ label: "Blog", icon: faFeather },
		{ label: "Github", icon: faGithub },
		{ label: "Linkedin", icon: faLinkedin }
	];

	let mobileMode = true;
</script>

<header class:collapsed={mobileMode}>
	<div class="logo">
		<button on:click={() => (mobileMode = !mobileMode)}>
			<div>-</div>
			<div>-</div>
			<div>-</div>
		</button>

		<img src="/favicon.svg" alt="logo" title="Me" />
	</div>

	<nav class:visible={mobileMode}>
		<ul>
			{#each menuItems as item}
				<li>
					<NavItem label={item.label} icon={item.icon} />
				</li>
			{/each}
		</ul>
	</nav>

	<div class="switchs" class:visible={mobileMode}>
		<Switch />
		<Switch />
	</div>
</header>

<style lang="postcss">
	header,
	.logo,
	nav,
	ul,
	li,
	.switchs {
		display: flex;
	}

	header {
		--header-height: 3.5rem;
		top: 0;
		position: sticky;
		height: var(--header-height);
		padding: 0 1.5rem;
		background: var(--primary);

		& .logo {
			min-width: 2rem;
			width: 10%;
			align-items: center;
			outline: 1px solid green;
			& button {
				display: none;
				z-index: 10;
			}
		}

		& nav {
			width: 100%;
			align-items: center;
			justify-content: center;
			outline: 1px solid red;
		}

		& .switchs {
			width: 10%;
			align-items: center;
			justify-content: end;
			outline: 1px solid green;
		}
	}

	img {
		height: 2.5rem;
	}

	ul {
		width: 50%;
		height: 100%;
		justify-content: space-evenly;
	}

	@media screen and (max-width: 100rem) {
		header {
			height: 100vh;
			flex-direction: column;
			align-items: center;
			transition: 0.3s;
		}

		header .logo {
			width: 100%;
			display: flex;
			justify-content: space-between;

			& button {
				display: block;
				width: 4rem;
			}
		}

		nav {
			opacity: 1;
			visibility: visible;
			height: 100%;
			transition: 0.3s;
			& ul {
				height: 100%;
				flex-direction: column;
				outline: 1px solid orange;
				width: 100%;

				& li {
					outline: 1px solid yellow;
					justify-content: center;
				}
			}
		}

		.visible {
			opacity: 0;
			visibility: hidden;
			height: 0;
		}

		.collapsed {
			height: var(--header-height);
		}
	}
</style>
