<script lang="ts">
	import { ProjectRepository } from "$/models/repositories/Project";
	import Loading from "$lib/Loading.svelte";
	import ProjectCard from "$lib/ProjectCard.svelte";
	import SideScroll from "$lib/SideScroll.svelte";
</script>

{#await ProjectRepository.getAllProjects()}
	<Loading />
{:then projects}
	<SideScroll velocity={2}>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</SideScroll>
{/await}
