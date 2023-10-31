<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export let size: VariantProps<typeof buttonVariants>['size'] = 'default';
	export let variant: VariantProps<typeof buttonVariants>['variant'] = 'default';
	export let href: string | undefined = undefined;
	export let type: HTMLButtonAttributes['type'] = 'button';
	export let tag: string = 'button';

	const buttonVariants = cva(
		'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-primary/90',
					destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
					outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-primary underline-offset-4 hover:underline'
				},
				size: {
					default: 'h-10 rounded px-4 py-2',
					sm: 'h-9 rounded px-3',
					lg: 'h-11 rounded px-8',
					icon: 'h-10 w-10'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	$: buttonClass = twMerge(buttonVariants({ variant, size, className: $$restProps.class }));
</script>

{#if href}
	<a
		{href}
		{...$$restProps}
		class={buttonClass}
		role="button"
		on:click
		on:change
		on:keydown
		on:keyup
		on:touchstart|passive
		on:touchend
		on:touchcancel
		on:mouseenter
		on:mouseleave
	>
		<slot />
	</a>
{:else if tag === 'button'}
	<button
		{type}
		{...$$restProps}
		class={buttonClass}
		on:click
		on:change
		on:keydown
		on:keyup
		on:touchstart|passive
		on:touchend
		on:touchcancel
		on:mouseenter
		on:mouseleave
	>
		<slot />
	</button>
{:else}
	<svelte:element this={tag} {...$$restProps} class={buttonClass}>
		<slot />
	</svelte:element>
{/if}
