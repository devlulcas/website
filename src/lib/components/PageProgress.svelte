<script lang="ts">
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '$lib/assets/styles/nprogress.css';

	NProgress.configure({
		showSpinner: false,
		easing: 'ease',
		speed: 500,
		trickleSpeed: 200
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>
