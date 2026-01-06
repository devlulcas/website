<script lang="ts">
	import Footer from '$/lib/components/footer/footer.svelte';
	import Header from '$/lib/components/header/header.svelte';
	import { t } from '$/lib/i18n';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import '../helpers.css';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<a
	href="#main-content"
	class="bg-brand-600 sr-only top-1 left-1 text-white focus:not-sr-only focus:fixed focus:p-3"
>
	{$t('common.skipToContent')}
</a>
<Header />
{@render children?.()}
<Footer />
