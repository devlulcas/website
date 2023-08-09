<script lang="ts">
	import { skills, website } from '$/lib/assets/config';
	import SkillCard from '$/lib/components/skill-card/skill-card.svelte';
	import customAboutMeDrawingSvg from '$lib/assets/images/me.svg';
</script>

<div class="lc-grid min-h-[--view-height]">
	<main class="col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 mt-12">
		<div>
			<img
				class="w-64 h-64 mb-4 mx-auto"
				src={customAboutMeDrawingSvg}
				alt="a simple, hand-drawn illustration of myself in a cartoonish minimalist style (curly hair, smiley face)"
			/>

			<h1 class="text-4xl font-bold mb-4">Hello! I'm Lucas</h1>

			<p>
				I'm a software developer, currently working at
				<a
					class="text-brand-500 hover:underline"
					href="https://dantasbikes.com.br/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Dantas Bikes
				</a>
				as a Frontend Developer, helping to build the future of the company.
				<br />
				I'm constantly learning new things, and I'm always looking for new challenges.
			</p>

			<hr class="my-4" />

			<p>
				You can find me on
				<a
					class="text-brand-500 hover:underline"
					href={website.social.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>,
				<a
					class="text-brand-500 hover:underline"
					href={website.social.github}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				and
				<a
					class="text-brand-500 hover:underline"
					href={website.social.twitter}
					target="_blank"
					rel="noopener noreferrer"
				>
					X (Twitter)
				</a>. Feel free to reach out and say hi!
			</p>

			<hr class="my-4" />

			<p>I'm pretty proficient with the following technologies:</p>

			<div class="pt-2 pb-12 flex gap-2 flex-grow flex-wrap justify-stretch">
				{#each skills as skill}
					<SkillCard {skill} />
				{/each}
			</div>
		</div>
	</main>
</div>
