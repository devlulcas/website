<script lang="ts">
	export let visible: boolean;
</script>

<div aria-hidden={visible} class="menu__button">
	<input type="checkbox" id="menu_checkbox" on:click />
	<label for="menu_checkbox" class="menu__label">
		<div class="menu__bar" />
	</label>
</div>

<style lang="postcss">
	/*
	! ALL CREDITS TO HIMALAYA SINGH
	https://codepen.io/himalayasingh
	*/
	* {
		-webkit-tap-highlight-color: transparent;
	}

	*:focus {
		outline: none;
	}

	.menu__button {
		width: 4rem;
		overflow: hidden;
		@media screen and (min-width: 70rem) {
			display: none;
		}
	}

	#menu_checkbox {
		display: none;
	}

	.menu__label {
		position: relative;
		display: block;
		height: 3rem;
		cursor: pointer;
	}

	.menu__label:before,
	.menu__label:after,
	.menu__bar {
		position: absolute;
		left: 0;
		width: 100%;
		height: 0.5rem;
		background-color: var(--on-primary);
	}

	.menu__label:before,
	.menu__label:after {
		content: "";
		transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
	}

	.menu__label:before {
		top: 0;
	}

	.menu__label:after {
		top: 1.2rem;
	}

	.menu__bar {
		top: 2.4rem;
	}

	.menu__bar:before {
		content: "MENU";
		position: absolute;
		top: 0.5rem;
		right: 0;
		left: 0;
		color: var(--on-primary);
		font-size: 1.2rem;
		font-weight: bold;
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		text-align: center;
	}

	#menu_checkbox:checked + .menu__label:before {
		left: -4rem;
	}

	#menu_checkbox:checked + .menu__label:after {
		left: 4rem;
	}

	#menu_checkbox:checked + .menu__label .menu__bar:before {
		animation: moveUpThenDown 0.5s ease 0.2s forwards, shakeWhileMovingUp 0.5s ease 0.2s forwards,
			shakeWhileMovingDown 0.2s ease 0.5s forwards;
	}

	@keyframes moveUpThenDown {
		0% {
			top: 0;
		}
		50% {
			top: -2.5rem;
		}
		100% {
			top: -1.5rem;
		}
	}

	@keyframes shakeWhileMovingUp {
		0% {
			transform: rotateZ(0);
		}
		25% {
			transform: rotateZ(-10deg);
		}
		50% {
			transform: rotateZ(0deg);
		}
		75% {
			transform: rotateZ(10deg);
		}
		100% {
			transform: rotateZ(0);
		}
	}

	@keyframes shakeWhileMovingDown {
		0% {
			transform: rotateZ(0);
		}
		80% {
			transform: rotateZ(3deg);
		}
		90% {
			transform: rotateZ(-3deg);
		}
		100% {
			transform: rotateZ(0);
		}
	}
</style>
