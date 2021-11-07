<!--JAVASCRIPT-->
<script>
	import NavBar from '$lib/NavBar.svelte';
</script>

<!--HEAD-->
<svelte:head>
	<!--FONTS-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap"
		rel="stylesheet"
	/>
	<!--ICONS-->
	<script src="https://kit.fontawesome.com/ed4cb9f4cf.js" crossorigin="anonymous"></script>
</svelte:head>

<!--BODY-->
<div class="container">
	<NavBar />
	<slot />
</div>

<!--CSS-->
<style>
	/* RESET DE CSS */
	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(ul, ol) {
		list-style: none;
	}

	:global(a) {
		text-decoration: none;
	}

	:global(button) {
		appearance: none;
		border: none;
		box-shadow: none;
	}

	.container {
		height: 100vh;
		display: grid;
		grid-template-rows: 1fr 9fr;
	}

	:global(.sr-only) {
		position: absolute;
		height: 1px;
		width: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip-path: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	/* TEMA DE COR */
	:root {
		font-size: 62.5%;
		--white: #fff;
		--black: #18191f;
		--blue: #1947e5;
		--yellow: #ffbd12;
		--pink: #ff89bb;
		--dark-gray: #474a57;
		--gray: #969bab;
		--light-gray: #eeeff4;
		--green: #00c6ae;
		--red: #f95a2c;
		--blue-violet: #8a2be2;
	}

	/* TIPOGRAFIA */
	:global(h1, h2, a, span, label, button) {
		font-family: 'Montserrat', sans-serif;
	}

	:global(p, input, textarea) {
		font-family: 'Courier New', Courier, monospace;
	}
</style>
