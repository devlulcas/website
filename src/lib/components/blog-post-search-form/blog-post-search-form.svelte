<script lang="ts">
	import { t } from '$/lib/i18n';
	import { page } from '$app/state';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import { Fa } from 'svelte-fa';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();
</script>

<form class="flex w-full flex-col gap-2 {className}" action="/blog" method="GET">
	<label class="sr-only" for="search-blog-post">{$t('blog.search')}</label>

	<div class="lc-gradient w-full overflow-hidden rounded-lg p-[2px]">
		<div class="flex items-center overflow-hidden rounded-md focus-within:outline">
			<input
				type="search"
				id="search-blog-post"
				name="search"
				placeholder={$t('blog.search')}
				class="w-full bg-background p-2 outline-none"
				defaultValue={page.url.searchParams.get('search') ?? ''}
			/>

			<button title="Search" type="submit" class="h-10 w-10 bg-background p-2 focus:bg-transparent">
				<Fa icon={faSearch} class="h-6 w-6" />
			</button>
		</div>
	</div>
</form>
