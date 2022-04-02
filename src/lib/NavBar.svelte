<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faBrain,
		faCode,
		faFeather,
		faEnvelope,
		faHome
	} from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import Switch from './Switch.svelte';
</script>

<header>
	<div class="logo">
		<button>
			<div>-</div>
			<div>-</div>
			<div>-</div>
		</button>

		<img src="/favicon.svg" alt="logo" title="Me" />
	</div>

	<nav>
		<ul>
			<li>
				<a href="/">
					<Fa icon={faHome} aria-label="home" />
					Home
				</a>
			</li>

			<li>
				<a href="/">
					<Fa icon={faCode} aria-label="projects" />
					Projects
				</a>
			</li>

			<li>
				<a href="/">
					<Fa icon={faBrain} aria-label="skills" />
					Skills
				</a>
			</li>

			<li>
				<a href="/">
					<Fa icon={faEnvelope} aria-label="contact" />
					Contact
				</a>
			</li>

			<li>
				<a href="/">
					<Fa icon={faFeather} aria-label="blog" />
					Blog
				</a>
			</li>

			<li>
				<a href="/">
					<Fa icon={faGithub} aria-label="github" />
					Github
				</a>
			</li>

			<li>
				<a href="/">
					<Fa icon={faLinkedin} aria-label="linkedin" />
					Linkedin
				</a>
			</li>
		</ul>
	</nav>

	<div class="switchs">
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
	a,
	.switchs {
		display: flex;
	}

	header {
		top: 0;
		position: sticky;
		height: 3.5rem;
		padding: 0 1.5rem;
		background: var(--primary);

		& .logo {
			min-width: 2rem;
			width: 10%;
			align-items: center;
			outline: 1px solid green;
			& button {
				display: none;
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

	a {
		align-items: center;
		text-decoration: none;
		color: var(--on-primary);
		font-weight: 1000;
		font-size: clamp(1rem, 1.2rem, 1vw);
		padding: 1rem;
		gap: 0.5rem;
		&:hover {
			color: var(--special);
		}
	}

	@media screen and (max-width: 100rem) {
		header {
			height: 100vh;
			flex-direction: column;
			align-items: center;
			display: none;
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
			height: 100%;
			& ul {
				height: 100%;
				flex-direction: column;
				outline: 1px solid orange;
				width: 100%;

				& li {
					outline: 1px solid yellow;
					justify-content: center;

					& a {
						outline: 1px solid violet;
						color: var(--on-primary);
						font-weight: 1000;
						font-size: clamp(2rem, 4vh, 3rem);
						padding: 1rem;
						gap: 1rem;
					}
				}
			}
		}
	}
</style>
