<script>
	import Input from "$lib/Input.svelte";
	import { faMailBulk, faMessage, faSignature } from "@fortawesome/free-solid-svg-icons";
	import Submit from "$lib/Submit.svelte";
</script>

<form action="" method="post">
	<Input
		icon={faSignature}
		label="your name:"
		type="text"
		name="name"
		placeholder="How do you want to be called?"
	/>

	<Input
		icon={faMailBulk}
		label="your email:"
		type="email"
		name="email"
		placeholder="What's your e-mail?"
	/>

	<Input
		icon={faMessage}
		label="subject:"
		type="text"
		name="subject"
		placeholder="What's the subject?"
	/>

	<Input
		icon={faMessage}
		label="leave a message:"
		type="area"
		name="message"
		placeholder="leave a message"
	/>

	<Submit />
</form>

<style lang="postcss">
	form {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		width: 90%;

		@media screen and (min-width: 70rem) {
			width: 60%;
		}
	}
</style>
