<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	onMount(() => {
		const copyButtonEl = document.querySelectorAll('[data-copy-code="true"]');

		function copyToClipboard(event: Event) {
			const buttonElement = event.currentTarget as HTMLButtonElement;
			const codeTitleElement = buttonElement.parentElement;
			console.log(buttonElement);

			const codeElement = codeTitleElement?.nextElementSibling;
			navigator.clipboard.writeText(codeElement?.textContent ?? '');
		}

		const buttonText = $t('common.copyToClipboard');
		copyButtonEl.forEach((btn) => {
			btn.innerHTML = `
        <div title="${buttonText}">
          <span class="sr-only">${buttonText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path><path d="M16 4h2a2 2 0 0 1 2 2v4"></path><path d="M21 14H11"></path><path d="m15 10-4 4 4 4"></path></svg>
        </div>
      `;

			btn.addEventListener('click', copyToClipboard);
		});

		return () => copyButtonEl.forEach((btn) => btn.removeEventListener('click', copyToClipboard));
	});
</script>
