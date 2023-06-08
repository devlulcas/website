<script lang="ts">
	import { Github } from 'lucide-svelte';
	import raccoon from '$lib/assets/images/raccoon.png';
	import sus from '$lib/assets/sounds/amogus.mp3';
	import cat from '$lib/assets/images/cat.png';
	import susCat from '$lib/assets/images/sus.png';
	import { fly, slide } from 'svelte/transition';
	import Seo from '$/lib/components/SEO.svelte';
	import { getOgImage } from '$/lib/helpers/get-og-url';
	import { website } from '$/lib/config/website';

	const steps = {
		start: 'start',
		botChecking: 'botChecking',
		botFailed: 'botFailed',
		botPassed: 'botPassed'
	};

	type Steps = (typeof steps)[keyof typeof steps];

	let step: Steps = steps.start;

	let player: HTMLAudioElement | null = null;

	$: if (step === steps.botFailed && player) {
		player.play();
	}
</script>

<Seo
	seo={{
		title: 'Login',
		description: 'Login to your account to comment on posts, like posts, and more!',
		image: getOgImage('Login to your account')
	}}
/>

<main
	class="relative max-h-[--screen] overflow-hidden flex flex-col items-center justify-center flex-1 w-full px-4 py-8 mx-auto space-y-8 max-w-7xl sm:px-6 lg:px-8"
>
	{#if step === steps.start || step === steps.botFailed}
		<div out:fly={{ y: 100, duration: 300 }} class="relative">
			<img class="w-28 absolute top-[-2.85rem] -right-6" src={raccoon} alt="raccoon" />

			<button
				on:click={() => (step = steps.botChecking)}
				class="w-fit px-3 py-2 lc-cta text-white flex rounded-md gap-2"
			>
				<Github /> Click here to login with Github
			</button>
		</div>
	{/if}

	{#if step === steps.botChecking}
		<div
			in:fly={{ y: 100, duration: 300 }}
			out:fly={{ y: 100, duration: 300 }}
			class="absolute bottom-0 flex flex-col items-center"
		>
			<div class="flex items-center gap-2">
				<p class="text-center text-gray-300 text-sm">Bip bop bup?</p>

				<button class="text-brand-500 rounded-md" on:click={() => (step = steps.botPassed)}>
					Nah!
				</button>

				<button class="text-red-500 rounded-md" on:click={() => (step = steps.botFailed)}>
					Bup!
				</button>
			</div>

			<img class="w-28" src={cat} alt="cat" />
		</div>
	{/if}

	{#if step === steps.botPassed}
		<div in:fly={{ y: 100, duration: 300 }} class="relative">
			<img class="w-28 absolute top-[-2.85rem] -right-6" src={raccoon} alt="raccoon" />

			<a
				class="w-fit px-3 py-2 lc-cta text-white flex rounded-md gap-2"
				href={website.auth.github.initUrl}
			>
				<Github /> Login with Github
			</a>
		</div>
	{/if}

	<audio bind:this={player} src={sus} />
</main>

{#if step === steps.botFailed && step !== steps.start}
	<img
		in:slide={{ duration: 300, axis: 'x' }}
		out:slide={{ duration: 300, axis: 'x' }}
		class="w-28 absolute bottom-[--footer-height] left-0"
		src={susCat}
		alt="sus cat"
	/>
{/if}
