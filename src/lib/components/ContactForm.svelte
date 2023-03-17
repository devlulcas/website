<script lang="ts">
	import { Mail, Send } from 'lucide-svelte';
	import SectionTitle from './SectionTitle.svelte';
	import { t } from '$lib/i18n';
</script>

<form
	action="https://formsubmit.co/lucasalvesrego.contato@gmail.com"
	method="POST"
	class="flex flex-col justify-center h-full w-full"
>
	<SectionTitle id="contact" as="h2" title={$t('homepage.titles.contact')} icon={Mail} />

	<div class="flex flex-col">
		<label class="text-md text-gray-700 dark:text-gray-200 font-bold" for="name">
			{$t('homepage.contactForm.name')}
		</label>

		<input
			class="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-sm px-2 py-1"
			type="text"
			name="name"
			id="name"
		/>
	</div>

	<div class="flex flex-col space-y-2 mt-4">
		<label class="text-md text-gray-700 dark:text-gray-200 font-bold" for="email">
			{$t('homepage.contactForm.email')}
		</label>

		<input
			class="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-sm px-2 py-1"
			type="email"
			name="email"
			id="email"
		/>
	</div>

	<div class="flex flex-col space-y-2 mt-4">
		<label class="text-md text-gray-700 dark:text-gray-200 font-bold" for="message">
			{$t('homepage.contactForm.message')}
		</label>

		<textarea
			class="resize-none border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-sm px-2 py-1"
			name="message"
			id="message"
			rows="5"
		/>
	</div>

	<input type="hidden" name="_captcha" value="false" />

	<input type="hidden" name="_next" value="https://www.lucasrego.tech/" />

	<button
		class="lc-cta mt-6 text-md w-full text-white py-2 px-8 flex items-center justify-center rounded-sm gap-2"
		type="submit"
	>
		<span class="font-bold">
			{$t('homepage.contactForm.submit')}
		</span>
		<Send size={18} />
	</button>
</form>
