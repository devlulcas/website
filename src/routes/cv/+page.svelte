<script lang="ts">
	import { experiences } from '$/lib/assets/config/experiences';
	import { locale, t } from '$/lib/i18n';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
	import { Fa } from 'svelte-fa';

	let translatedExperiences = $derived(experiences[$locale === 'en' ? 'en' : 'ptBr']);
</script>

<main
	id="main-content"
	class="container min-h-[--view-height] w-screen gap-y-10 overflow-x-hidden py-8 lg:px-20 print:mx-0 print:max-w-full"
>
	<h1 class="text-left text-4xl font-bold print:text-2xl">
		{$t('cv.name')}
	</h1>

	<section class="mt-6 print:mt-3">
		<p class="text-lg">{$t('cv.aboutMe')}</p>
	</section>

	<nav class="my-5 flex flex-wrap gap-3">
		<a
			class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary print:border-none print:p-0"
			href={$t('cv.website')}
		>
			<Fa icon={faEarthAmericas} class="h-5 w-5 print:hidden" />
			<span class="block print:hidden">Website</span>
			<span class="hidden print:block print:underline">{$t('cv.website')}</span>
		</a>
		<a
			class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary print:border-none print:p-0"
			href={$t('cv.github')}
		>
			<Fa icon={faGithub} class="h-5 w-5 print:hidden" />
			<span class="block print:hidden">GitHub</span>
			<span class="hidden print:block print:underline">{$t('cv.github')}</span>
		</a>
		<a
			class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary print:border-none print:p-0"
			href={$t('cv.linkedin')}
		>
			<Fa icon={faLinkedin} class="h-5 w-5 print:hidden" />
			<span class="block print:hidden">LinkedIn</span>
			<span class="hidden print:block print:underline">{$t('cv.linkedin')}</span>
		</a>
	</nav>

	<section class="mt-4 print:mt-2">
		<h2 class="border-l-[3px] border-brand-700 pl-4 text-2xl font-bold dark:border-brand-500">
			{$t('cv.experience.title')}
		</h2>
		<ul
			class="ml-[1px] mt-2 border-l border-brand-600 pl-4 dark:border-brand-400 print:border-black"
		>
			{#each translatedExperiences as { company, period, projects }}
				<li class="mt-2 print:mt-0">
					<h3 class="text-lg font-bold text-brand-600 dark:text-brand-500">
						{company}
					</h3>
					<p class="text-sm text-brand-600">{period}</p>

					<ul class="mt-2 flex flex-col gap-4 divide-y print:divide-y-0">
						{#each projects as { description, name, stack }}
							<li class="relative py-4 print:py-0">
								<h4 class="text-base font-bold">{name}</h4>

								<p class="my-1 mb-4 text-primary/75 print:mb-2">
									{description}
								</p>

								<ul class="flex flex-wrap gap-2">
									<li>Tecnologias usadas:</li>

									{#each stack as stack}
										<li
											class="rounded bg-secondary-foreground px-2 py-0.5 text-xs text-secondary print:rounded-none print:border-b print:px-0"
										>
											{stack}
										</li>
									{/each}
								</ul>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mt-4 print:mt-2">
		<ul
			class="ml-[1px] mt-2 border-l border-brand-600 pl-4 dark:border-brand-400 print:border-black"
		>
			<li class="mt-2 print:mt-1">
				<p class="mt-2 text-primary/75 print:mt-1">{$t('cv.education')}</p>
			</li>
		</ul>
	</section>
</main>
