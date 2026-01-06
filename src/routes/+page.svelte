<script lang="ts">
	import IconSvgSpinners3DotsBounce from '$/lib/assets/icons/icon-svg-spinners3-dots-bounce.svelte';
	import IconUimArrowUpRight from '$/lib/assets/icons/icon-uim-arrow-up-right.svelte';
	import ContactForm from '$/lib/components/contact-form/contact-form.svelte';
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import SeeMoreLink from '$/lib/components/container-section/see-more-link.svelte';
	import FeaturedPostCard from '$/lib/components/post-card/featured-post-card.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import FeaturedProjectCard from '$/lib/components/project-card/featured-project-card.svelte';
	import ProjectCard from '$/lib/components/project-card/project-card.svelte';
	import SeoHead from '$/lib/components/seo-head/seo-head.svelte';
	import SkillCarousel from '$/lib/components/skill-carousel/skill-carousel.svelte';
	import { t } from '$/lib/i18n';
	import HeroSection from '../lib/components/hero-section/hero-section.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<SeoHead />

<main
	id="main-content"
	class="lc-grid min-h-[--view-height] w-screen gap-y-10 overflow-x-hidden px-4 pb-8 lg:px-8"
>
	<HeroSection />

	<SkillCarousel class="col-span-12 col-start-1 lg:col-span-8 lg:col-start-3" />

	<ContainerSection id="featured-projects" title={$t('home.featuredProjects.title')}>
		<p class="text-lg text-muted-foreground">
			{$t('home.featuredProjects.description')}
		</p>

		<div class="mt-4 flex flex-col gap-6">
			{#each data.featuredProjects as project}
				<FeaturedProjectCard {project} />
			{/each}
		</div>
	</ContainerSection>

	<ContainerSection id="posts" title={$t('home.blog.title')}>
		<p class="mb-4 text-lg text-muted-foreground">
			{$t('home.blog.description')}
		</p>

		<FeaturedPostCard post={data.featuredPost} />

		<div
			aria-hidden="true"
			class="lc-line my-4 h-[1px] w-full rounded-full bg-brand-500 dark:bg-brand-800"
		></div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.recentPosts as recentPost}
				<PostCard post={recentPost} />
			{/each}
		</div>

		<SeeMoreLink href="/blog">
			{#snippet startIcon()}
				<IconUimArrowUpRight class="tranform -rotate-45" />
			{/snippet}
			{$t('home.blog.seeMore')}
			{#snippet endIcon()}
				<IconUimArrowUpRight />
			{/snippet}
		</SeeMoreLink>
	</ContainerSection>

	<ContainerSection id="projects" title={$t('home.projects.title')}>
		{#await data.lazy.projects}
			<div
				class="flex h-96 w-full animate-pulse items-center justify-center rounded border border-brand-500 bg-foreground/10 text-brand-500"
			>
				<IconSvgSpinners3DotsBounce  />
			</div>
		{:then projects}
			{#if projects.length > 0}
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each projects as project}
						<ProjectCard {project} />
					{/each}
				</div>
			{:else}
				<p
					class="flex h-96 w-full items-center justify-center rounded border-brand-500 bg-foreground/10 text-brand-500"
				>
					{$t('home.projects.noProjects')}
				</p>
			{/if}
		{/await}

		<SeeMoreLink href="https://github.com/devlulcas/">
			{#snippet startIcon()}
				<Fa icon={faArrowRight} />
			{/snippet}
			{$t('home.projects.seeMore')}
			{#snippet endIcon()}
				<Fa icon={faArrowRight} />
			{/snippet}
		</SeeMoreLink>
	</ContainerSection>

	<ContainerSection id="demo-projects" title={'Demos'}>
		{#await data.lazy.demos}
			<div
				class="flex h-96 w-full animate-pulse items-center justify-center rounded border border-brand-500 bg-foreground/10 text-brand-500"
			>
				<Fa icon={faSpinner} class="animate-spin" />
			</div>
		{:then demos}
			{#if demos.length > 0}
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each demos as project}
						<ProjectCard {project} />
					{/each}
				</div>
			{:else}
				<p
					class="flex h-96 w-full items-center justify-center rounded border-brand-500 bg-foreground/10 text-brand-500"
				>
					{$t('home.projects.noProjects')}
				</p>
			{/if}
		{/await}
	</ContainerSection>

	<ContainerSection id="contact" title={$t('home.contact.title')} class="mb-8 flex flex-col">
		<ContactForm />
	</ContainerSection>
</main>
