<!--JAVASCRIPT-->
<script></script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - CURRICULUM VITAE</title>
</svelte:head>

<!--BODY-->
<main>
	<div>
		<h1>Curriculum Vitae</h1>
		<a href="./pdfs/cv.pdf" download="lucas_alves_rego_developer.pdf">
			<i class="fas fa-file-download" />
		</a>
	</div>
	<iframe
		title="Lucas alves curriculum vitae"
		src="https://docs.google.com/document/d/e/2PACX-1vSKB5whliAVIx0EPtA4zhd4srsuafjysnVdaCrkObV3VR__uiJwlAFdTObzPtzbfbZJsY88aXVkvMN4/pub?embedded=true"
		class="curriculum"
	/>
</main>

<!--CSS-->
<style>
	main {
		height: 100%;
		background: var(--white);
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		font-size: 2rem;
		margin-right: 1ch;
	}

	a {
		font-size: 3rem;
	}

	.curriculum {
		width: 100%;
		height: 95%;
	}

	@media screen and (min-width: 55rem) {
		h1 {
			font-size: 5rem;
			text-align: center;
		}

		a {
			font-size: 4rem;
		}
	}
</style>
