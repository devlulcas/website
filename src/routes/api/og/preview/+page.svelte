<script lang="ts">
	import { extractOgParams } from '$/lib/utils/og';
	import { page } from '$app/state';
	import Og from '../og.svelte';

	const props = extractOgParams(page.url.searchParams);
</script>

<main id="main-content" class="grid min-h-[--view-height] place-items-center gap-6">
	<Og {...props} />
</main>
