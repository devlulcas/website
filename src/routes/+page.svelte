<script lang="ts">
	import Carousel from '$/lib/components/Carousel.svelte';
	import Divider from '$/lib/components/Divider.svelte';
	import FeaturedPost from '$/lib/components/FeaturedPost.svelte';
	import FeaturedProjectPreview from '$/lib/components/FeaturedProjectPreview.svelte';
	import Hero from '$/lib/components/Hero.svelte';
	import PostCategoryList from '$/lib/components/PostCategoryList.svelte';
	import PostPreview from '$/lib/components/PostPreview.svelte';
	import SectionTitle from '$/lib/components/SectionTitle.svelte';
	import Skills from '$/lib/components/Skills.svelte';
	import WalkingPenguin from '$/lib/components/WalkingPenguin.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { website } from '$lib/config/website';
	import { Newspaper, Tag, TerminalSquare } from 'lucide-svelte';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>{website.title}</title>
</svelte:head>

<Hero />

<section class="max-w-3xl  py-8 space-y-8">
	<SectionTitle as="h2" title="Postagens recentes" icon={Newspaper} />

	<FeaturedPost post={data.featuredPost} />

	{#each data.posts as post}
		<PostPreview {post} />
	{/each}
</section>

<section>
	<SectionTitle as="h3" title="Categorias de postagens" icon={Tag} />
	<PostCategoryList categories={data.categories} />
</section>

<Divider />

<section>
	<SectionTitle id="projects" as="h2" title="Meus principais projetos" icon={TerminalSquare} />
	<ul class="flex flex-col gap-4">
		{#each data.pinnedProjects as pinnedProject, index}
			<li>
				<FeaturedProjectPreview project={pinnedProject} />
			</li>
		{/each}
	</ul>
</section>

<Divider />

<SectionTitle as="h2" title="Meus outros projetos" icon={TerminalSquare} />

<Carousel projects={data.otherProjects} />

<section>
	<SectionTitle id="skills" as="h2" title="Habilidades" icon={TerminalSquare} />
	<Skills />
</section>

<div class="mt-2 flex flex-col w-full h-[80vh]">
	<ContactForm />

	<div class="w-full relative">
		<WalkingPenguin />
	</div>
</div>
