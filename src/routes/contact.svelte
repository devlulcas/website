<!--JAVASCRIPT-->
<script>
	import EmailInput from '$lib/input/EmailInput.svelte';
	import SubmitButton from '$lib/input/SubmitButton.svelte';
	import Textarea from '$lib/input/Textarea.svelte';
	import TextInput from '$lib/input/TextInput.svelte';
	import MiniRoundedButton from '$lib/MiniRoundedButton.svelte';

	const hrefs = {
		github: 'https://github.com/devlulcas',
		linkedin: 'https://www.linkedin.com/in/lucasalvesregodev/',
		email: 'mailto:lucasalvesrego.contato@gmail.com',
		tel: 'tel:+5577981175919'
	};

	const icons = {
		github: 'fab fa-github-alt',
		linkedin: 'fab fa-linkedin-in',
		email: 'fas fa-mail-bulk',
		tel: 'fas fa-phone-alt'
	};
</script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - CONTACT</title>
</svelte:head>

<!--BODY-->
<div class="container">
	<main>
		<h1>Let's talk!</h1>
		<form on:submit|preventDefault>
			<TextInput name="name" label="Your name" icon="fas fa-signature" />
			<EmailInput name="email" label="Your e-mail" icon="fas fa-envelope" />
			<TextInput name="subject" label="Subject" icon="fas fa-comment-alt" />
			<Textarea name="message" label="Leave a message" icon="fa fa-code" />
			<SubmitButton />
		</form>
		<div class="social-container">
			<MiniRoundedButton label="github" href={hrefs.github} icon={icons.github} />
			<MiniRoundedButton label="linkedin" href={hrefs.linkedin} icon={icons.linkedin} />
			<MiniRoundedButton label="email" href={hrefs.email} icon={icons.email} />
			<MiniRoundedButton label="tel" href={hrefs.tel} icon={icons.tel} />
		</div>
	</main>
	<div class="hero-image" />
</div>

<!--CSS-->
<style>
	.container,
	main {
		height: 100%;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr;
		background: var(--blue-violet);
	}

	main {
		border-top: 0.4rem solid var(--black);
	}

	h1 {
		font-size: max(3vw, 5vh);
		padding: 2rem;
		height: 10%;
		color: var(--white);
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 70%;
		padding: 0 2rem;
	}

	.social-container {
		display: flex;
		justify-content: space-evenly;
		padding-top: 5%;
	}

	.hero-image {
		border-top: 0.4rem solid var(--black);
		border-left: 0.4rem solid var(--black);
		display: none;
	}

	@media screen and (min-width: 75rem) {
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		.hero-image {
			display: block;
			background-image: url('../static/images/heroImage.jpg');
		}
	}
</style>
