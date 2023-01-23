<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import Button from './Button.svelte';

	const submitContact: SubmitFunction = (form) => {
		console.log(form);
	};
</script>

<div class="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
	<form
		class="flex flex-col justify-center space-y-4 p-12 h-full w-full"
		action="/?/contact"
		method="POST"
		use:enhance={submitContact}
	>
		<div class="flex flex-col space-y-2">
			<label class="text-sm" for="name">Name</label>
			<input
				class="border border-gray-300 rounded-md px-2 py-1"
				type="text"
				name="name"
				id="name"
			/>
		</div>

		<div class="flex flex-col space-y-2">
			<label class="text-sm" for="email">Email</label>
			<input
				class="border border-gray-300 rounded-md px-2 py-1"
				type="email"
				name="email"
				id="email"
			/>
		</div>

		<div class="flex flex-col space-y-2">
			<label class="text-sm" for="message">Message</label>
			<textarea
				class="resize-none border border-gray-300 rounded-md px-2 py-1"
				name="message"
				id="message"
				rows="5"
			/>
		</div>

		<Button type="submit">Send</Button>
	</form>

	<div class="h-full w-full bg-[url(/images/project.webp)] bg-cover bg-center">
		<div
			class="h-full w-full backdrop-blur-md mix-blend-multiply flex flex-col justify-center items-center space-y-4 p-4"
		>
			<h2 class="text-5xl font-black">Contact me</h2>
			<p class="text-lg font-bold text-gray-500">
				You can contact me by filling out the form or by sending an email to
				<a class="text-blue-500 hover:underline" href="mailto:lucasalvesrego.contato@gmail.com">
					lucasalvesrego.contato@gmail.com
				</a>
			</p>
		</div>
	</div>
</div>
