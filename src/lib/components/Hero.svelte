<script>
	import { Coffee } from 'lucide-svelte';
</script>

<div class="relative full-bleed h-[90vh] ">
	<article
		class="absolute inset-0 z-[1] px-[5%] md:px-[20%] h-full flex flex-col justify-center items-start"
	>
		<h1 class="font-black text-5xl md:text-6xl text-brand-600 backdrop-blur-sm">
			Olá! Sou o Lucas
		</h1>

		<p class="text-lg mt-6 lg:w-2/5 text-gray-800 dark:text-gray-100 my-3 backdrop-blur-sm">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed consectetur repudiandae
			necessitatibus ducimus nobis culpa praesentium atque vel itaque, fugit nulla nihil at
			temporibus sequi nemo dignissimos est placeat vitae.
		</p>

		<p class="text-md mt-6 backdrop-blur-sm">
			<a
				class="text-white bg-gradient-to-l from-brand-700 to-brand-500 py-2 px-8 flex items-center rounded-sm w-fit gap-2"
				href="#contact"
			>
				<span class="font-bold">Vamos conversar</span>
				<Coffee />
			</a>
		</p>
	</article>

	<div class="z-[-1] relative">
		<div class="circle absolute -right-1/2 rounded-full w-5/6 aspect-square" />

		<div class="tag">Lorem</div>

		<div class="tag">Lorem Ipsum</div>

		<div class="tag">Dolor sit at amet</div>

		<div class="tag">Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>

		<div class="tag">Lorem</div>

		<div class="tag">Lorem ipsum</div>
	</div>
</div>

<style lang="postcss">
	.circle {
		background-image: linear-gradient(-45deg, var(--brand-light), var(--brand), var(--brand-light));
	}

	.tag {
		@apply absolute py-2 px-6 border bg-white text-brand-700 shadow-2xl rounded-sm right-10;

		&:first-child {
			transform: rotate(-10deg) translateX(-10rem) translateY(-10rem);
		}

		&:nth-child(2) {
			transform: rotate(-10deg) translateX(-10rem) translateY(10rem);
		}

		&:nth-child(3) {
			transform: rotate(18deg) translateX(-10rem) translateY(10rem);
		}

		&:nth-child(4) {
			transform: rotate(13deg) translateX(-15rem) translateY(30rem);
		}
		&:nth-child(5) {
			transform: rotate(-2deg) translateX(-15rem) translateY(45rem);
		}

		&:nth-child(6) {
			transform: rotate(5deg) translateX(-15rem) translateY(40rem);
		}
	}
</style>
