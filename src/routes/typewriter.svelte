<script lang="ts">
	type Props = {
		text: string;
		speed: number; // base typing delay in ms
		words: string[];
	};

	let { text, speed, words }: Props = $props();

	let wordIndex = $state(0);
	let charIndex = $state(0);
	let isDeleting = $state(false);
	let displayedWord = $state('');

	const renderedText = $derived(text.replace('$words', displayedWord));

	$effect(() => {
		const typeSpeed = Math.max(10, speed ?? 100);
		const deleteSpeed = Math.max(10, Math.floor(typeSpeed / 2));
		const pauseAtEnd = typeSpeed * 7;
		const pauseBetweenWords = typeSpeed * 4;

		let cancelled = false;
		let timeoutId: number;

		// reset cycle whenever inputs change
		wordIndex = 0;
		charIndex = 0;
		isDeleting = false;
		displayedWord = '';

		function schedule(delay: number) {
			timeoutId = window.setTimeout(tick, delay);
		}

		function tick() {
			if (cancelled) return;
			const list = words && words.length > 0 ? words : [''];
			const fullWord = list[wordIndex % list.length];

			if (isDeleting) {
				if (charIndex > 0) {
					charIndex = charIndex - 1;
					displayedWord = fullWord.slice(0, charIndex);
					schedule(deleteSpeed);
				} else {
					isDeleting = false;
					wordIndex = (wordIndex + 1) % list.length;
					schedule(pauseBetweenWords);
				}
			} else {
				if (charIndex < fullWord.length) {
					charIndex = charIndex + 1;
					displayedWord = fullWord.slice(0, charIndex);
					schedule(typeSpeed);
				} else {
					isDeleting = true;
					schedule(pauseAtEnd);
				}
			}
		}

		schedule(typeSpeed);

		return () => {
			cancelled = true;
			clearTimeout(timeoutId);
		};
	});
</script>

<span class="w-full font-serif text-5xl text-primary italic md:w-auto md:text-7xl min-h-[1.5lh]">
	{renderedText}
</span>

<style lang="postcss">
	@reference "tailwindcss";
	@reference "../app.css";

	h1::after {
		content: '';
		display: inline-block;
		width: 0.25ch;
		height: 0.95lh;
		background-color: var(--color-primary);
		vertical-align: middle;
		animation: blink 1s infinite;
		margin-left: 0.25ch;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
