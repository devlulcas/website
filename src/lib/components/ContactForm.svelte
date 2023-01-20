<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	const submitContact: SubmitFunction = (form) => {
		console.log(form);
	};
</script>

<form action="/?/contact" method="POST" use:enhance={submitContact}>
	<div>
		<label for="name">Name</label>
		<input type="text" name="name" id="name" />
	</div>

	<div>
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
	</div>

	<div>
		<label for="message">Message</label>
		<textarea name="message" id="message" rows="5" />
	</div>

	<button type="submit">Send</button>
</form>
