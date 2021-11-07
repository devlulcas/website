<!--HTML-->
<div class="button-container">
	<button>
		Send e-mail
		<i class="fas fa-paper-plane" />
	</button>
	<div class="divider" />
</div>

<!--CSS-->
<style>
	.button-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 2%;
	}

	button {
		background: var(--black);
		color: var(--white);
		font-size: 1.4rem;
		font-weight: 800;
		padding: 1rem 1.5rem;
		width: 50%;
		border: 0.3rem solid var(--white);
		border-radius: 2rem;
		z-index: 1;
		color: var(--white);
		cursor: pointer;
		transition: 0.5s;
	}

	button:hover {
		color: var(--yellow);
	}

	.divider {
		height: 0.5rem;
		width: 60%;
		border-radius: 5rem;
		position: absolute;
		transition: 0.5s;
		background: var(--black);
	}

	button:hover + .divider {
		height: 1.2rem;
		width: 100%;
		background: var(--yellow);
	}

	@media screen and (min-width: 55rem) {
		button {
			font-size: 2.4rem;
		}
	}
</style>
