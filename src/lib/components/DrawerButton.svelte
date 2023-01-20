<script lang="ts">
	export let active: boolean;
</script>

<div class="container">
	<input
		checked={active}
		on:click
		type="checkbox"
		id="menu_checkbox"
		aria-label="abre menu mobile"
	/>

	<label for="menu_checkbox">
		<div class="line" />
		<div class="line" />
		<div class="line" />
	</label>
</div>

<style>
	label {
		cursor: pointer;
	}

	@media screen and (min-width: 90rem) {
		label {
			display: none;
		}
	}

	.line {
		width: 3rem;
		height: 0.5rem;
		background: var(--primary);
		border-radius: 0.5rem;
		margin-top: 0.5rem;
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
		transform: translateX(-20% + 1 * 20%);
	}

	input:checked + label .line:nth-child(2) {
		transform: translateX(-20% + 1 * 20%);
	}

	input:checked + label .line:nth-child(3) {
		transform: translateX(-20% + 1 * 20%);
	}
</style>
