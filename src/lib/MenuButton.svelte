<!-- TYPESCRIPT -->
<script lang="ts">
	export let active: boolean;
</script>

<!-- HTML -->

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

<!-- STYLES - SCSS -->
<style lang="scss">
	label {
		@media screen and (min-width: 90rem) {
			display: none;
		}
	}

	.line {
		width: 3rem;
		height: 0.5rem;
		background: #000;
		border-radius: 0.5rem;
		margin-top: 0.5rem;

		&:first-child {
			margin-top: 0;
		}
	}

	input {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	input:checked + label {
		& div {
			background: #f00;
		}
	}
</style>
