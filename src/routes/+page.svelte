<script lang="ts">
	import ContactForm from '$/lib/components/contact/contact-form.svelte';
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import SeeMoreLink from '$/lib/components/container-section/see-more-link.svelte';
	import FeaturedPostCard from '$/lib/components/post-card/featured-post-card.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import FeaturedProjectCard from '$/lib/components/project-card/featured-project-card.svelte';
	import ProjectCard from '$/lib/components/project-card/project-card.svelte';
	import { ArrowRight, FeatherIcon, GithubIcon } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="lc-grid px-4 lg:px-8 pb-8">
	<ContainerSection id="posts" title="Blog posts">
		<p class="text-lg text-muted-foreground mb-4">Some of my thoughts and experiences.</p>

		<FeaturedPostCard post={data.featuredPosts[0]} />

		<div class="h-[1px] w-full bg-brand-500 dark:bg-brand-800 rounded-full my-4" />

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.featuredPosts as featuredPost}
				<PostCard post={featuredPost} />
			{/each}
		</div>

		<SeeMoreLink href="/blog">
			<FeatherIcon slot="start-icon" name="arrow-right" size={18} />
			See more posts
			<ArrowRight slot="end-icon" name="arrow-right" size={18} />
		</SeeMoreLink>
	</ContainerSection>

	<ContainerSection id="featured-projects" title="Featured Projects">
		<p class="text-lg text-muted-foreground">
			These are some of my favorite projects that I've worked on.
		</p>

		<div class="flex flex-col gap-6 mt-4">
			{#each data.featuredProjects as project}
				<FeaturedProjectCard {project} />
			{/each}
		</div>
	</ContainerSection>

	<ContainerSection id="projects" title="Projects">
		<div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			{#each data.projects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<SeeMoreLink href="https://github.com/devlulcas/">
			<GithubIcon slot="start-icon" name="arrow-right" size={18} />
			See more projects
			<ArrowRight slot="end-icon" name="arrow-right" size={18} />
		</SeeMoreLink>
	</ContainerSection>

	<ContainerSection id="contact" title="Contact" class="flex flex-col h-[--safe-area-view-height]">
		<ContactForm />
	</ContainerSection>
</main>
