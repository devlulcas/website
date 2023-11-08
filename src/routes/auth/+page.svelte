<script lang="ts">
	import Button from '$/lib/components/button/button.svelte';
	import { inputFieldClassNames } from '$/lib/components/input/styles.js';
	import { enhance } from '$app/forms';
	export let form;
</script>

<form class="min-h-[--view-height] gap-2 flex items-center flex-col justify-center" method="post" action="?/signIn" use:enhance>
	{#if form}
		{#if form.success}
			<strong class="px-2 py-1 bg-green-500 border max-w-[300px] rounded shadow-lg text-green-50">
				Welcome Back!
			</strong>
		{:else}
			<strong class="px-2 py-1 bg-destructive border max-w-[300px] rounded shadow-lg text-destructive-foreground">
				{form.error}
			</strong>
		{/if}
	{/if}

	<div
		class="flex flex-col gap-2 p-4 bg-foreground/10 rounded shadow-lg border border-foreground/50 min-w-[300px] backdrop-blur-md"
	>
		<div class={inputFieldClassNames.container}>
			<label class={inputFieldClassNames.label} for="email">E-mail</label>
			<input class={inputFieldClassNames.input} type="email" name="email" value={form?.email ?? ''} />
		</div>

		<div class={inputFieldClassNames.container}>
			<label class={inputFieldClassNames.label} for="password">Pasword</label>
			<input class={inputFieldClassNames.input} type="password" name="password" />
		</div>

		<Button class="mt-4" type="submit">Sign in</Button>

		<p class="text-sm text-muted-foreground flex gap-2 mt-6">
			<span>Can I sign up?</span>
			<span class="text-brand-600">Nop, this is an admin panel. You can only sign in.</span>
		</p>
	</div>
</form>
