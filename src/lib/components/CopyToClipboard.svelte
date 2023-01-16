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
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
          </svg>
        </div>
      `;

			btn.addEventListener('click', copyToClipboard);
		});

		return () => copyButtonEl.forEach((btn) => btn.removeEventListener('click', copyToClipboard));
	});
</script>
