<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let name: string;
	export let label: string;
	export let required: boolean = true;
	export let placeholder: string;
	export let icon: IconDefinition;
	export let type: "email" | "text" | "area" | "phone";
</script>

<div class="input">
	<label class="sr-only" for={name}>{label}</label>
	<div class="icon">
		<Fa {icon} />
	</div>

	{#if type === "area"}
		<textarea
			class="input input__field input__field--textarea"
			{placeholder}
			{name}
			id={name}
			{required}
		/>
	{:else}
		<input {type} class="input input__field" {placeholder} {name} id={name} {required} />
	{/if}
</div>

<style lang="postcss">
	.sr-only {
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

	.input {
		display: flex;
		align-items: center;
		background: var(--on-primary);
		border: 0.3rem solid var(--primary-dark);
		border-radius: 1rem;
		padding: 0.2rem 0.2rem 0.2rem 1rem;

		& .input__field {
			font-size: 1.2rem;
			width: 100%;
			border-radius: 0 0.8rem 0.8rem 0;
			border: none;
			padding-left: 0.5rem;
			padding: 0.6rem 0.5rem 0.6rem 1rem;
			color: var(--primary);
		}
	}

	.icon {
		font-size: 1.5rem;
		margin-right: 0.3rem;
		color: var(--primary-dark);
	}

	.input__field--textarea {
		border-radius: 0.8rem;
		resize: none;

		&::-webkit-scrollbar {
			border-radius: 1rem;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 1rem;
		}

		&::-webkit-scrollbar-track {
			border-radius: 1rem;
		}
	}
</style>
