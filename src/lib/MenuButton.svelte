<!-- TYPESCRIPT -->
<script lang="ts">
	import { circOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

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
		& .line {
			background: #000;

			@for $line from 1 through 3 {
				&:nth-child(#{$line}) {
					background: #f00;
					transform: translateX(-20% + $line * 20%);
				}
			}
		}
	}
</style>
