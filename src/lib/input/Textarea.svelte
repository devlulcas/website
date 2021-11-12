<!--JAVASCRIPT-->
<script>
	import './Input.css';
	export let name;
	export let label;
	export let value;
	export let placeholder;
</script>

<!--HTML-->
<div class="input input--textarea">
	<label class="sr-only" for={name}>{label}</label>
	<textarea class="input-field input-field--textarea" {placeholder} {name} id={name} bind:value />
</div>
