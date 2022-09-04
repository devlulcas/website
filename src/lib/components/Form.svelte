<!--TS-->
<script>
	import Input from '$lib/components/Input.svelte';
	import Submit from '$lib/components/Submit.svelte';
	import { FaEnvelope, FaMessage, FaMailBulk, FaSignature } from '$lib/assets/icons';
</script>

<!--HTML-->
<form>
	<Input label={'nameLabel'} type="text" name="name" placeholder={'nameLabel'}>
		<FaSignature slot="icon" />
	</Input>

	<Input label={'mailLabel'} type="email" name="email" placeholder={'mailLabel'}>
		<FaMailBulk slot="icon" />
	</Input>

	<Input label={'subjectLabel'} type="text" name="subject" placeholder={'subjectLabel'}>
		<FaMessage slot="icon" />
	</Input>

	<Input label={'messageLabel'} type="area" name="message" placeholder={'messageLabel'}>
		<FaEnvelope slot="icon" />
	</Input>

	<Submit />
</form>

<!--CSS-->
<style lang="scss">
	form {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		width: 90%;

		@media screen and (min-width: 70rem) {
			width: 50%;
		}
	}
</style>
