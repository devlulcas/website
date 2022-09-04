<script lang="ts">
	import { FaMailBulk, FaPhone, FaLinkedin, FaGithub, FaHeart } from '$lib/assets/icons';
</script>

<!--HTML-->
<footer>
	<ul>
		<li>
			<a title="Telefone" href="tel:+5577981175919">
				<FaPhone />
				Phone
			</a>
		</li>

		<li>
			<a title="E-mail" href="mailto:lucasalvesrego.contato@gmail.com">
				<FaMailBulk />
				E-mail
			</a>
		</li>

		<li>
			<a
				title="Linkedin"
				href="https://www.linkedin.com/in/lucasalvesregodev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin />
				Linkedin
			</a>
		</li>

		<li>
			<a
				title="Github"
				href="https://github.com/devlulcas"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub />
				Github
			</a>
		</li>
	</ul>

	<p>
		<span class="icon">
			<FaHeart />
		</span>

		powered by sveltekit
	</p>
</footer>

<!--CSS-->
<style lang="scss">
	footer {
		width: 100%;
		display: flex;
		justify-content: space-between;

		@media screen and (max-width: 70rem) {
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	ul {
		display: flex;
		gap: 1rem;
	}

	a {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--primary-light);
		padding: 0.5rem;
		border-radius: 0.25rem;
		color: var(--on-primary);
		font-size: 2vh;
		text-decoration: none;
		transition: 0.25s all ease-in-out;

		@media screen and (min-width: 70rem) {
			font-size: 1vw;
		}

		&:hover {
			color: var(--secondary);
			background: var(--on-secondary);
		}
	}

	p {
		font-weight: 700;
		font-size: 2vh;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.icon {
		color: var(--secondary);
	}
</style>
