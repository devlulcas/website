<script lang="ts">
	import { t } from '$lib/i18n';

	export let active: boolean;
</script>

<div class="container">
	<input
		checked={active}
		on:click
		type="checkbox"
		id="menu_checkbox"
		aria-label={$t('common.menu')}
	/>

	<label class="block xl:hidden" for="menu_checkbox">
		<div class="line bg-gray-500 rounded-md" />
		<div class="line bg-gray-500 rounded-md" />
		<div class="line bg-gray-500 rounded-md" />
	</label>
</div>

<style>
	label {
		cursor: pointer;
	}

	.line {
		width: 2rem;
		height: 0.2rem;
		margin-top: 0.3rem;
		margin-left: 0.5rem;
		transition: all 0.25s;
	}

	.line:first-child {
		margin-top: 0;
	}

	input {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	input:checked + label .line:nth-child(1) {
		transform: translateX(calc(-20% + 1 * 20%));
	}

	input:checked + label .line:nth-child(2) {
		transform: translateX(calc(-20% + 2 * 20%));
	}

	input:checked + label .line:nth-child(3) {
		transform: translateX(calc(-20% + 3 * 20%));
	}
</style>
