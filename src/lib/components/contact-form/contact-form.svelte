<script lang="ts">
	import { t } from '$/lib/i18n';
	import { enhance } from '$app/forms';
	import customContactDrawingSvg from '$lib/assets/images/contact.svg';
	import sadRaccoonSvg from '$lib/assets/images/failure.svg';
	import loadingRaccoonGif from '$lib/assets/images/loading.gif';
	import type { SubmitFunction } from '@sveltejs/kit';

	let formState: 'idle' | 'submitting' | 'success' | 'failure' = 'idle';

	const contactEnhance: SubmitFunction = ({ formElement }) => {
		if (formState === 'submitting') return;

		formState = 'submitting';

		return async ({ result, update }) => {
			await update();

			if (result.type === 'success' || result.type === 'failure') {
				formState = result.type;
				formElement.reset();
			}
		};
	};
</script>

<div class="flex flex-col lg:flex-row h-full gap-4">
	<form class="flex flex-col gap-4 flex-1" method="POST" action="/?/sendMessage" use:enhance={contactEnhance}>
		<div>
			<label class="mb-2 text-muted-foreground flex flex-col w-full" for="name">
				{$t('home.contact.form.name.label')}
			</label>
			<input
				required
				placeholder={$t('home.contact.form.name.placeholder')}
				class="w-full border rounded-lg text-foreground bg-background p-2"
				type="text"
				id="name"
				name="name"
			/>
		</div>

		<div>
			<label class="mb-2 text-muted-foreground flex flex-col w-full" for="email">
				{$t('home.contact.form.email.label')}
			</label>
			<input
				required
				placeholder={$t('home.contact.form.email.placeholder')}
				class="w-full border rounded-lg text-foreground bg-background p-2"
				type="email"
				id="email"
				name="email"
			/>
		</div>

		<div>
			<label class="mb-2 text-muted-foreground flex flex-col w-full" for="message">
				{$t('home.contact.form.message.label')}
			</label>
			<textarea
				placeholder={$t('home.contact.form.message.placeholder')}
				required
				class="w-full border rounded-lg text-foreground bg-background p-2 max-h-[200px]"
				id="message"
				name="message"
			/>
		</div>

		<input type="text" name="avocado" class="hidden" aria-hidden="true" tabindex="-1" autocomplete="off" />

		{#if formState === 'submitting'}
			<img
				alt="raccoon rolling around by https://www.baamboozle.com"
				src={loadingRaccoonGif}
				width="100"
				height="100"
				class="mx-auto my-auto"
			/>
			<p class="text-muted-foreground text-sm italic mt-1">
				{$t('home.contact.form.submit.submitting')}
			</p>
		{/if}

		{#if formState === 'success'}
			<p class="text-green-500 text-sm italic mt-1">
				{$t('home.contact.form.submit.success')}
			</p>
		{/if}

		{#if formState === 'failure'}
			<img alt="sad raccoon" src={sadRaccoonSvg} width="100" height="100" class="mx-auto my-auto" />
			<p class="text-red-500 text-sm italic mt-1">
				{$t('home.contact.form.submit.failure')}
			</p>
		{/if}

		<button
			class="lc-gradient mt-auto h-12 w-full text-white rounded-lg p-2 font-bold focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-brand-400 disabled:hover:bg-brand-400"
			type="submit"
			disabled={formState === 'submitting'}
		>
			{formState === 'submitting' ? $t('home.contact.form.submit.submitting') : $t('home.contact.form.submit.idle')}
		</button>
	</form>

	<div class="rounded-lg flex flex-col justify-center items-center flex-1">
		<img
			alt="a simple, hand-drawn illustration of myself writing the bits for 'hi!' with a pencil"
			src={customContactDrawingSvg}
			class="rounded-lg w-auto h-64 lg:w-10/12 lg:h-auto mix-blend-difference"
		/>
	</div>
</div>
