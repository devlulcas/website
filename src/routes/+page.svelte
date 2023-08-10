<script lang="ts">
	import ContactForm from '$/lib/components/contact-form/contact-form.svelte';
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import SeeMoreLink from '$/lib/components/container-section/see-more-link.svelte';
	import FeaturedPostCard from '$/lib/components/post-card/featured-post-card.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import FeaturedProjectCard from '$/lib/components/project-card/featured-project-card.svelte';
	import ProjectCard from '$/lib/components/project-card/project-card.svelte';
	import { t } from '$/lib/i18n';
	import { ArrowRight, FeatherIcon, GithubIcon } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="lc-grid px-4 lg:px-8 pb-8 gap-y-10">
	<ContainerSection id="posts" title={$t('home.blog.title')}>
		<p class="text-lg text-muted-foreground mb-4">{$t('home.blog.description')}</p>

		<FeaturedPostCard post={data.featuredPost} />

		<div class="h-[1px] lc-line w-full bg-brand-500 dark:bg-brand-800 rounded-full my-4" />

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.recentPosts as recentPost}
				<PostCard post={recentPost} />
			{/each}
		</div>

		<SeeMoreLink href="/blog">
			<FeatherIcon slot="start-icon" name="arrow-right" size={18} />
			{$t('home.blog.seeMore')}
			<ArrowRight slot="end-icon" name="arrow-right" size={18} />
		</SeeMoreLink>
	</ContainerSection>

	<ContainerSection id="featured-projects" title={$t('home.featuredProjects.title')}>
		<p class="text-lg text-muted-foreground">
			{$t('home.featuredProjects.description')}
		</p>

		<div class="flex flex-col gap-6 mt-4">
			{#each data.featuredProjects as project}
				<FeaturedProjectCard {project} />
			{/each}
		</div>
	</ContainerSection>

	<ContainerSection id="projects" title={$t('home.projects.title')}>
		<div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			{#each data.projects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<SeeMoreLink href="https://github.com/devlulcas/">
			<GithubIcon slot="start-icon" name="arrow-right" size={18} />
			{$t('home.projects.seeMore')}
			<ArrowRight slot="end-icon" name="arrow-right" size={18} />
		</SeeMoreLink>
	</ContainerSection>

	<ContainerSection id="contact" title={$t('home.contact.title')} class="flex flex-col mb-8 h-[--view-height]">
		<ContactForm />
	</ContainerSection>
</main>
