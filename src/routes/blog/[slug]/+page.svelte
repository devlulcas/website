<script lang="ts">
	import type { PageServerLoad } from './$types';

	export let data: PageServerLoad;
</script>

<h1>
	{JSON.stringify(data)}
</h1>
