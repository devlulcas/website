<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { Mail, Send } from 'lucide-svelte';
	import SectionTitle from './SectionTitle.svelte';

	const submitContact: SubmitFunction = (form) => {
		console.log(form);
	};
</script>

<form
	class="flex flex-col justify-center h-full w-full"
	action="/?/contact"
	method="POST"
	use:enhance={submitContact}
>
	<SectionTitle id="contact" as="h2" title="Entre em contato" icon={Mail} />

	<div class="flex flex-col">
		<label class="text-md text-gray-700 dark:text-gray-200 font-bold" for="name">Name</label>
		<input class="border border-gray-300 rounded-sm px-2 py-1" type="text" name="name" id="name" />
	</div>

	<div class="flex flex-col space-y-2 mt-4">
		<label class="text-md text-gray-700 dark:text-gray-200 font-bold" for="email">Email</label>
		<input
			class="border border-gray-300 rounded-sm px-2 py-1"
			type="email"
			name="email"
			id="email"
		/>
	</div>

	<div class="flex flex-col space-y-2 mt-4">
		<label class="text-md text-gray-700 dark:text-gray-200 font-bold" for="message">Message</label>
		<textarea
			class="resize-none border border-gray-300 rounded-sm px-2 py-1"
			name="message"
			id="message"
			rows="5"
		/>
	</div>

	<button
		class="lc-cta mt-6 text-md w-full text-white py-2 px-8 flex items-center justify-center rounded-sm gap-2"
		type="submit"
	>
		<span class="font-bold">Enviar mensagem</span>
		<Send size={18} />
	</button>
</form>
