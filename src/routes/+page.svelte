<!-- TYPESCRIPT -->
<script lang="ts">
	import Posts from '$modules/Posts.svelte';
	import Projects from '$modules/Projects.svelte';
	import Skills from '$modules/Skills.svelte';
	import Start from '$modules/Start.svelte';
</script>

<!-- HTML -->
<Start />
<div>
	<Posts />
	<Projects />
	<Skills />
</div>

<style lang="scss">
	div {
		width: 100%;
		padding: 1rem;

		@media screen and (min-width: 90rem) {
			padding: 1rem 25rem;
		}
	}
</style>
