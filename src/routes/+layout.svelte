<script lang="ts">
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { locale, locales, t } from '$lib/i18n';
	import '$lib/assets/styles/global.css';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
	<a href="/bookmarks">Bookmarks</a>
	<a href="/uses">Uses</a>
</nav>

<select bind:value={$locale}>
	<a href="/blog/category">Category</a>
	{#each $locales as value}
		<option {value}>{$t(`lang.${value}`)}</option>
	{/each}
</select>

<ThemeSwitcher />

<slot />
