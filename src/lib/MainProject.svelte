<script lang="ts">
	import type { ProjectInterface } from "$/models/interfaces/Project";

	import CardProject from "$/lib/ProjectCard.svelte";
	import TechPins from "$lib/TechPins.svelte";

	export let project: ProjectInterface;
	export let id: string;
</script>

<section {id} class="project__special">
	<div class="project__app">
		<CardProject {project} />
	</div>

	<div class="project__details">
		<h2>{project.name}</h2>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, fugiat facere corrupti
			<slot />
		</p>

		<div class="project__tech">
			<TechPins techs={project.techs} />
		</div>
	</div>
</section>

<style lang="postcss">
	.project__special {
		display: flex;
		gap: 1.5rem;
		align-items: center;

		@media screen and (max-width: 70rem) {
			flex-direction: column;
			gap: 1rem;

			& .project__app {
				width: 100%;
			}
		}
	}

	.project__details {
		width: 65%;
		display: flex;
		flex-direction: column;
		align-items: center;

		& h2 {
			width: 100%;
			text-transform: uppercase;
			color: var(--special);
			font-weight: 800;
			font-size: 3.5vh;
		}

		& p {
			font-size: 2vh;
			text-indent: 3ch;
			font-weight: 700;
		}

		& .project__tech {
			width: 85%;
		}

		@media screen and (max-width: 70rem) {
			width: 100%;

			& h2 {
				display: none;
			}

			& .project__tech {
				width: 100%;
			}
		}
	}

	@media screen and (min-width: 70rem) {
		#second {
			flex-direction: row-reverse;

			& h2 {
				text-align: end;
			}

			& p {
				text-align: end;
			}
		}
	}
</style>
