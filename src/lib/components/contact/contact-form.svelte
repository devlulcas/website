<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let submitting = false;

	const cleanFormErrors = {
		name: '',
		email: '',
		message: ''
	};

	let formErrors = cleanFormErrors;

	$: invalidForm = Object.values(formErrors).some((error) => error !== '');

	const contactEnhance: SubmitFunction = ({ formElement, formData, cancel }) => {
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		if (name === '') {
			formErrors.name = 'Name is required';
			cancel();
		}

		if (email === '') {
			formErrors.email = 'Email is required';
			cancel();
		}

		if (message === '') {
			formErrors.message = 'Message is required';
			cancel();
		}

		if (submitting) return;

		formErrors = cleanFormErrors;

		submitting = true;

		return async ({ result, update }) => {
			await update();

			if (result.type === 'success' || result.type === 'failure') {
				formElement.reset();
			}

			submitting = false;
		};
	};
</script>

<div class="flex flex-col lg:flex-row h-full gap-4">
	<form class="flex flex-col gap-4 flex-1" method="post" use:enhance={contactEnhance}>
		<div>
			<label class="mb-2 text-muted-foreground flex flex-col w-full" for="name">Name</label>
			<input
				required
				class="w-full border rounded-lg text-foreground bg-background p-2"
				type="text"
				id="name"
				name="name"
			/>
		</div>

		<div>
			<label class="mb-2 text-muted-foreground flex flex-col w-full" for="email">Email</label>
			<input
				required
				class="w-full border rounded-lg text-foreground bg-background p-2"
				type="email"
				id="email"
				name="email"
			/>
		</div>

		<div>
			<label class="mb-2 text-muted-foreground flex flex-col w-full" for="message">Message</label>
			<textarea
				required
				class="w-full border rounded-lg text-foreground bg-background p-2 max-h-[200px]"
				id="message"
				name="message"
			/>
		</div>

		<input
			type="text"
			name="zummm"
			class="hidden"
			aria-hidden="true"
			tabindex="-1"
			autocomplete="off"
		/>

		{#if submitting}
			<img
				alt="Raccoon Pixel Art"
				src="https://media.baamboozle.com/uploads/images/904487/1677507091_45823_gif-url.gif"
				width="100"
				height="100"
				class="mx-auto my-auto"
			/>
		{/if}

		<button
			class="h-12 lc-cta mt-auto w-full text-white rounded-lg p-2 font-bold hover:bg-brand-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-brand-400 disabled:hover:bg-brand-400"
			type="submit"
			disabled={submitting || invalidForm}
		>
			{submitting ? 'Submitting...' : 'Submit'}
		</button>
	</form>

	<div class="rounded-lg flex flex-col justify-center items-center flex-1 lc-cta">
		<img alt="me" src="/contact.svg" class="rounded-lg w-auto h-64 lg:w-10/12 lg:h-auto" />
	</div>
</div>
