<!--TS-->
<script lang="ts">
	export let name: string;
	export let label: string;
	export let required: boolean = true;
	export let placeholder: string;
	export let type: 'email' | 'text' | 'area' | 'phone';
</script>

<!--HTML-->
<label for={name}>{label}</label>

<div class="container">
	<div class="icon">
		<slot name="icon" />
	</div>

	{#if type === 'area'}
		<textarea class="field textarea" {placeholder} {name} id={name} {required} />
	{:else}
		<input {type} class="field" {placeholder} {name} id={name} {required} />
	{/if}
</div>

<!--CSS-->
<style lang="scss">
	label {
		font-size: 1vw;
		text-transform: capitalize;
	}

	.container {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.2rem 0.2rem 1rem;
		border: 0.2rem solid var(--on-primary);
		border-radius: 0.5rem;
		background: var(--primary);
		box-shadow: 0.35rem 0.35rem 0 var(--on-primary);
	}

	.icon {
		font-size: 1.5rem;
		margin-right: 0.3rem;
		color: var(--on-primary);
	}

	.field {
		width: 100%;
		border: none;
		padding-left: 0.5rem;
		padding: 0.6rem 0.5rem 0.6rem 1rem;
		background: var(--primary);
		color: var(--on-primary);
		font-size: 1.2rem;
	}

	.textarea {
		resize: none;
		height: 10rem;

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
