<script lang="ts">
	import Divider from '$/lib/components/Divider.svelte';
	import FeaturedPost from '$/lib/components/FeaturedPost.svelte';
	import FeaturedProjectPreview from '$/lib/components/FeaturedProjectPreview.svelte';
	import PostCategoryList from '$/lib/components/PostCategoryList.svelte';
	import PostPreview from '$/lib/components/PostPreview.svelte';
	import ProjectPreview from '$/lib/components/ProjectPreview.svelte';
	import SectionTitle from '$/lib/components/SectionTitle.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { website } from '$lib/config/website';
	import { t } from '$lib/i18n';
	import { Newspaper, Tag, TerminalSquare } from 'lucide-svelte';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>{website.title}</title>
</svelte:head>

<section class="full-bleed bg-gray-500 h-[85vh]">
	<p>
		{$t('common.start')}
	</p>
</section>

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
	<SectionTitle as="h2" title="Meus principais projetos" icon={TerminalSquare} />
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

<ul class="py-4 grid grid-flow-col overflow-x-auto gap-4">
	{#each data.otherProjects as otherProject}
		<li>
			<ProjectPreview project={otherProject} />
		</li>
	{/each}
</ul>

<Divider />

<div class="full-bleed">
	<ContactForm />
</div>
