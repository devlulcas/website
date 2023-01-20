<script lang="ts">
	import PostCategoryList from '$/lib/components/PostCategoryList.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { website } from '$lib/config/website';
	import { t } from '$lib/i18n';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>{website.title}</title>
</svelte:head>

<p>
	{$t('common.start')}
</p>

{#each data.posts as post}
	<a href={'/blog/' + post.slug}>
		<h2>{post.title}</h2>
		<p>{post.excerpt.html}</p>
	</a>
{/each}

<hr />

<PostCategoryList categories={data.categories} />

<hr />

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

<hr />

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

<ContactForm />
