<script lang="ts">
	import { enhance } from '$app/forms';

	export let data
</script>

<h1>
	Hi {data.session?.user.email}
</h1>

<form method="post" action="/auth/sign-in/?/signOut" use:enhance>
	<button>Sign out</button>
</form>
