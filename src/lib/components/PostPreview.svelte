<script lang="ts">
	import { t } from '$lib/i18n';
	import type { FullPostMetadata } from '../data/posts/types';

	export let post: FullPostMetadata;
</script>

<article
	class="overflow-hidden relative p-4 mb-4 bg-gray-50 dark:bg-gray-900 rounded shadow-lg border-2 border-gray-200 dark:border-gray-800"
>
	<span
		title={post.lang === 'en' ? 'English' : 'Português'}
		class="overflow-hidden rounded-md absolute right-[-25px] top-[-25px] scale-50"
	>
		{#if post.lang === 'en'}
			<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="none">
				<g clip-path="url(#a)">
					<path fill="#fff" d="M75 75 0 0h75v75Z" />
					<path fill="#3B82F6" d="M75 37 38 0h37v37Z" />
					<path
						fill="#EF4444"
						d="M38 0H0l5 5h38l-5-5ZM48 10H10l5 5h38l-5-5ZM58 20H20l5 5h38l-5-5ZM68 30H30l5 5h38l-5-5ZM75 40H40l5 5h30v-5ZM75 50H50l5 5h20v-5ZM75 60H60l5 5h10v-5ZM75 70h-5l5 5v-5Z"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 0h75v75H0z" />
					</clipPath>
				</defs>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="none">
				<g clip-path="url(#a)">
					<path fill="#16A34A" d="M75 75 0 0h75v75Z" />
					<path fill="#FDE047" d="M75 58 17 0h58v58Z" />
					<path fill="#3B82F6" d="M75 37 38 0h37v37Z" />
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 0h75v75H0z" />
					</clipPath>
				</defs>
			</svg>
		{/if}
	</span>

	<h2 class="text-2xl mb-2 min-h-16 font-bold text-gray-900 dark:text-gray-100">
		<a href={post.url}>{post.title}</a>
	</h2>

	<p class="text-gray-700 dark:text-gray-300">{post.excerpt}</p>

	<ul class="mt-4 text-sm uppercase text-gray-500 dark:text-gray-400">
		{#each post.tags as tag}
			<li class="inline-block mr-2">
				<a class="text-xs uppercase text-brand-600 hover:text-brand-500" href={`/tags/${tag}`}>
					{tag}
				</a>
			</li>
		{/each}
	</ul>

	<p class="mt-4">
		<a class="text-sm uppercase text-brand-600 hover:text-brand-500" href={post.url}>
			{$t('common.readMore')}
		</a>
	</p>
</article>
