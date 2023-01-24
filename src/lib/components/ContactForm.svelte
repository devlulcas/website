<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { Mail } from 'lucide-svelte';
	import Button from './Button.svelte';
	import SectionTitle from './SectionTitle.svelte';

	const submitContact: SubmitFunction = (form) => {
		console.log(form);
	};
</script>

<form
	class="flex flex-col justify-center space-y-4 p-5 md:p-20 h-full w-full"
	action="/?/contact"
	method="POST"
	use:enhance={submitContact}
>
	<SectionTitle as="h2" title="Entre em contato" icon={Mail} />

	<div class="flex flex-col space-y-2">
		<label class="text-md text-gray-700 font-bold" for="name">Name</label>
		<input class="border border-gray-300 rounded-sm px-2 py-1" type="text" name="name" id="name" />
	</div>

	<div class="flex flex-col space-y-2">
		<label class="text-md text-gray-700 font-bold" for="email">Email</label>
		<input
			class="border border-gray-300 rounded-sm px-2 py-1"
			type="email"
			name="email"
			id="email"
		/>
	</div>

	<div class="flex flex-col space-y-2">
		<label class="text-md text-gray-700 font-bold" for="message">Message</label>
		<textarea
			class="resize-none border border-gray-300 rounded-sm px-2 py-1"
			name="message"
			id="message"
			rows="5"
		/>
	</div>

	<Button type="submit">Send</Button>
</form>
