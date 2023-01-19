<script lang="ts">
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import LanguageSwitcher from '$/lib/components/LanguageSwitcher.svelte';
	import '$lib/assets/styles/global.css';
	import Analytics from '$/lib/components/Analytics.svelte';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
	<a href="/bookmarks">Bookmarks</a>
	<a href="/uses">Uses</a>
</nav>

<LanguageSwitcher />

<ThemeSwitcher />

<slot />

<Analytics />
