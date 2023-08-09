<script lang="ts">
	import { navigating } from '$app/stores';
	import '$lib/assets/styles/nprogress.css';
	import NProgress from 'nprogress';

	NProgress.configure({
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	}
</script>
