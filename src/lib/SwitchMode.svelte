<script lang="ts">
	import { browser } from "$app/env";

	let lightMode = false;

	$: if (browser) {
		document.documentElement.classList.toggle("light", lightMode);
	}
</script>

<label for="toggle__core" class="toggle">
	<input
		name="toggle__core"
		bind:checked={lightMode}
		id="toggle__core"
		type="checkbox"
		class="checkbox"
	/>
	<div class="knobs" />
	<div class="layer" />
</label>

<style lang="postcss">
	.toggle {
		--toggle-height: 2rem;
		--toggle-width: calc(2 * var(--toggle-height));
		display: block;
		overflow: hidden;
		position: relative;
		width: var(--toggle-width);
		height: var(--toggle-height);
		border-radius: 4rem;

		&:focus-within {
			outline: 0.1rem solid var(--on-primary);
		}
	}

	.checkbox {
		position: relative;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
		z-index: 3;
	}

	.layer,
	.knobs {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.layer {
		width: 100%;
		background-color: var(--switch-dark);
		transition: 0.3s ease all;
		z-index: 1;
	}

	.knobs {
		z-index: 2;

		&::before,
		&::after {
			--pseudo-padding: 0.2rem;
			--option-size: calc(var(--toggle-height) - 2 * var(--pseudo-padding));
			content: "";
			position: absolute;
			top: var(--pseudo-padding);
			left: var(--pseudo-padding);
			width: var(--option-size);
			height: var(--option-size);
			border-radius: 50%;
			transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
		}

		&::before {
			background-image: url("https://cdn-icons-png.flaticon.com/512/230/230994.png");
		}

		&::after {
			top: -3rem;
			background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZp0EnDbCF-BMzxsEjkyrwfXfNBLRQqvdRzAazJHycSdhg_ihXkUvY22F9uzWKCmlAiI&usqp=CAU");
			right: 0.2rem;
			left: auto;
		}
	}

	.checkbox:checked {
		& + .knobs:before {
			top: -3rem;
		}

		& + .knobs:after {
			top: var(--pseudo-padding);
		}

		& ~ .layer {
			background-color: var(--switch-light);
		}
	}
</style>
