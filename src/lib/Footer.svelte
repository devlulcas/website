<script lang="ts">
	import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { faHeart, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";
</script>

<footer>
	<ul>
		<li>
			<a title="Telefone" href="tel:+5577981175919">
				<Fa icon={faPhone} />
			</a>
		</li>

		<li>
			<a title="E-mail" href="mailto:lucasalvesrego.contato@gmail.com">
				<Fa icon={faMailBulk} />
			</a>
		</li>

		<li>
			<a
				title="Linkedin"
				href="https://www.linkedin.com/in/lucasalvesregodev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Fa icon={faLinkedin} />
			</a>
		</li>

		<li>
			<a
				title="Github"
				href="https://github.com/devlulcas"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Fa icon={faGithubAlt} />
			</a>
		</li>
	</ul>

	<p>
		<Fa icon={faHeart} />
		made with love and sveltkit
	</p>
</footer>

<style lang="postcss">
	footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: var(--primary-light);

		@media screen and (max-width: 70rem) {
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	ul {
		display: flex;
		gap: 1rem;
	}

	li {
		& a {
			color: var(--secondary);
			font-size: 2.4vh;

			@media screen and (min-width: 70rem) {
				font-size: 1.4vw;
			}
		}
	}

	p {
		font-weight: 700;
		font-size: 2.4vh;
	}
</style>
