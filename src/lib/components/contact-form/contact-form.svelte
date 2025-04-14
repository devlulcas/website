<script lang="ts">
	import { website } from '$/lib/assets/config/website';
	import { locale, t } from '$/lib/i18n';
	import { enhance } from '$app/forms';
	import customContactDrawingSvg from '$lib/assets/images/contact.svg';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Fa from 'svelte-fa';
	import SocialMediaLink from './social-media-link.svelte';

	type FormResult = {
		type: string;
		message: { ptBr: string; en: string };
	};

	let formResultMessage: string = $state('');

	let formState: 'idle' | 'submitting' | 'success' | 'failure' = $state('idle');

	const contactEnhance: SubmitFunction = ({ formElement }) => {
		if (formState === 'submitting') return;

		formState = 'submitting';

		return async ({ result, update }) => {
			await update();

			if (result.type === 'success' || result.type === 'failure') {
				formState = result.type;
				formElement.reset();

				const resultDataIsFormResult = (data: unknown): data is FormResult => {
					return typeof data === 'object' && data !== null && 'type' in data && 'message' in data;
				};

				if (resultDataIsFormResult(result)) {
					formResultMessage = locale.get() === 'pt' ? result.message.ptBr : result.message.en;
				}
			}
		};
	};
</script>

<div class="flex flex-col gap-4 overflow-hidden rounded-xl bg-white/15 md:flex-row">
	<div class="flex flex-1 flex-col items-center justify-center rounded-lg p-8">
		<img
			alt="a simple, hand-drawn illustration of myself writing the bits for 'hi!' with a pencil"
			src={customContactDrawingSvg}
			class="h-64 w-auto rounded-lg mix-blend-difference md:h-96"
		/>
		<nav class="mt-12 flex justify-center gap-2">
			<SocialMediaLink href={website.social.github} title="/"
				><Fa icon={faGithub} /></SocialMediaLink
			>
			<SocialMediaLink href={website.social.linkedIn} title="/"
				><Fa icon={faLinkedin} /></SocialMediaLink
			>
			<SocialMediaLink href={website.social.email} title="/"
				><Fa icon={faEnvelope} /></SocialMediaLink
			>
		</nav>
	</div>

	<form
		class="flex flex-1 flex-col justify-center gap-4 bg-white/10 p-8"
		method="POST"
		action="/?/sendMessage"
		use:enhance={contactEnhance}
	>
		<div>
			<label class="mb-2 flex w-full flex-col text-muted-foreground" for="name">
				{$t('home.contact.form.name.label')}
			</label>
			<input
				required
				placeholder={$t('home.contact.form.name.placeholder')}
				class="w-full rounded-lg border bg-background p-2 text-foreground"
				type="text"
				id="name"
				name="name"
			/>
		</div>

		<div>
			<label class="mb-2 flex w-full flex-col text-muted-foreground" for="email">
				{$t('home.contact.form.email.label')}
			</label>
			<input
				required
				placeholder={$t('home.contact.form.email.placeholder')}
				class="w-full rounded-lg border bg-background p-2 text-foreground"
				type="email"
				id="email"
				name="email"
			/>
		</div>

		<div>
			<label class="mb-2 flex w-full flex-col text-muted-foreground" for="message">
				{$t('home.contact.form.message.label')}
			</label>
			<textarea
				placeholder={$t('home.contact.form.message.placeholder')}
				required
				class="h-32 w-full rounded-lg border bg-background p-2 text-foreground"
				id="message"
				name="message"
			></textarea>
		</div>

		{#if formState === 'submitting'}
			<p class="mt-1 text-sm italic text-muted-foreground">
				{$t('home.contact.form.submit.submitting')}
			</p>
		{/if}

		{#if formState === 'success'}
			<p class="mt-1 text-sm italic text-green-500">
				{formResultMessage ? formResultMessage : $t('home.contact.form.submit.success')}
			</p>
		{/if}

		{#if formState === 'failure'}
			<p class="mt-1 text-sm italic text-red-500">
				{formResultMessage ? formResultMessage : $t('home.contact.form.submit.failure')}
			</p>
		{/if}

		<button
			class="lc-gradient z-10 mt-auto h-12 w-full rounded-lg p-2 font-bold text-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:bg-brand-400 disabled:opacity-50 disabled:hover:bg-brand-400"
			type="submit"
			disabled={formState === 'submitting'}
		>
			{formState === 'submitting'
				? $t('home.contact.form.submit.submitting')
				: $t('home.contact.form.submit.idle')}
		</button>
	</form>
</div>
