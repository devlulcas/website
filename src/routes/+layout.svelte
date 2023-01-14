<script lang="ts">
	import { locale, locales, t } from '$lib/i18n';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
	<a href="/bookmarks">Bookmarks</a>
</nav>

<select bind:value={$locale}>
	<a href="/blog/category">Category</a>
	{#each $locales as value}
		<option {value}>{$t(`lang.${value}`)}</option>
	{/each}
</select>

<slot />
