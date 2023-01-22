<script lang="ts">
	import Divider from '$/lib/components/Divider.svelte';
	import PostCategoryList from '$/lib/components/PostCategoryList.svelte';
	import PostPreview from '$/lib/components/PostPreview.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { website } from '$lib/config/website';
	import { t } from '$lib/i18n';
	import type { ActionData, PageServerData } from './$types';
	import { Newspaper, TerminalSquare, Tag } from 'lucide-svelte';
	import SectionTitle from '$/lib/components/SectionTitle.svelte';
	import FeaturedPost from '$/lib/components/FeaturedPost.svelte';

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
	<SectionTitle as="h2" title="Meu projetos principais" icon={TerminalSquare} />
	<ul>
		{#each data.pinnedProjects as pinnedProject}
			<li>
				<article>
					<h2>{pinnedProject.name}</h2>
					<p>{pinnedProject.description}</p>

					<ul>
						{#each pinnedProject.languages.nodes as programmingLanguage}
							<li>{programmingLanguage.name}</li>
						{/each}
					</ul>

					<p>
						<time datetime={pinnedProject.createdAt}>
							{pinnedProject.createdAt}
						</time>
					</p>
				</article>
			</li>
		{/each}
	</ul>
</section>

<Divider />

<section>
	<SectionTitle as="h2" title="Meu outros projetos" icon={TerminalSquare} />

	<ul>
		{#each data.otherProjects as otherProject}
			<li>
				<article>
					<h2>{otherProject.name}</h2>
					<p>{otherProject.description}</p>

					<ul>
						{#each otherProject.languages.nodes as programmingLanguage}
							<li>{programmingLanguage.name}</li>
						{/each}
					</ul>

					<p>
						<time datetime={otherProject.createdAt}>
							{otherProject.createdAt}
						</time>
					</p>
				</article>
			</li>
		{/each}
	</ul>
</section>

<ContactForm />
