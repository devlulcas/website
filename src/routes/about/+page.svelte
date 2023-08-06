<script lang="ts">
	import { website } from '$/lib/assets/config';
</script>

<main class="min-h-[--safe-area-view-height] grid place-items-center px-4">
	<div>
		<img class="w-64 h-64 mb-4 mx-auto" src="/me.svg" alt="Lucas Alves Rego" />

		<h1 class="text-4xl font-bold mb-4">Hello! I'm Lucas</h1>

		<p>
			I'm a software engineer, currently working at <a
				class="text-brand-500 hover:underline"
				href="https://dantasbikes.com.br/"
				target="_blank"
				rel="noopener noreferrer">Dantas Bikes</a
			>
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
				LinkedIn</a
			>,
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
				X (Twitter)</a
			>. Feel free to reach out and say hi!
		</p>

		<hr class="my-4" />

		<p>I'm pretty proficient with the following technologies:</p>

		<ul class="mt-2 flex gap-2 flex-grow flex-wrap">
			{#each website.technologies as tech}
				<li class="bg-gray-200/50 dark:bg-gray-800/50 px-2 py-1 rounded text-sm">
					<a href={tech.url} target="_blank" rel="noopener noreferrer">
						{tech.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
