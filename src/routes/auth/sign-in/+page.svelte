<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<form method="post" action="/auth/sign-in/?/signIn" use:enhance>
	<input name="email" value={form?.email ?? ''} />
	<input type="password" name="password" />
	<button>Sign in</button>
</form>
