<!--JAVASCRIPT-->
<script>
	import './Input.css';
	export let name;
	export let label;
	export let icon;
	export let value;
</script>

<!--HTML-->
<div class="input">
	<label class="sr-only" for={name}>{label}</label>
	<i class="input-icon {icon}" />
	<input class="input-field" type="text" {name} id={name} bind:value />
</div>
