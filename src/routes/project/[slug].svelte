<script>
	import { page } from '$app/stores';
	const slug = $page.params.slug;
	const apiUrl = `http://localhost:3000/api/project/${slug}.json`;
	const slugTitle = slug.toUpperCase().replaceAll('_', ' ');

	let project = getProject();

	async function getProject() {
		const response = await fetch(apiUrl);
		const json = await response.json();
		project = json.project;
		return project;
	}
</script>

<svelte:head>
	<title>PROJECT - {slugTitle}</title>
</svelte:head>

<h1>{project.name}</h1>
