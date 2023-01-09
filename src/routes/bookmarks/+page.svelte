<script lang="ts">
	import { website } from '../../config/website';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{website.title}</title>
</svelte:head>

<code>
	<pre>
    {JSON.stringify(data, null, 2)}
  </pre>
</code>
