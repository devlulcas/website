<script lang="ts">
	import Button from '$/lib/components/button/button.svelte';
	import { enhance } from '$app/forms';
	export let data;

	const getUserName = () => {
		const email = data.session?.user?.email;

		if (email) {
			return email.split('@')[0];
		}

		return 'there';
	};
</script>

<div class="min-h-[--view-height] felx flex-col items-center">
	<div class="flex justify-between items-center gap-2 container">
		<h2 class="text-2xl font-bold text-foreground flex gap-2">
			<span>Hi</span>
			<span class="text-brand-600">{getUserName()}!</span>
		</h2>

		<form method="post" action="/auth/?/signOut" use:enhance>
			<Button variant="ghost" type="submit">Sign in</Button>
		</form>
	</div>
</div>
