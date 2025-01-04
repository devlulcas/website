<script lang="ts">
	import { experiences } from '$/lib/assets/config/experiences';
	import { locale, t } from '$/lib/i18n';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEarthAmericas, faWarning } from '@fortawesome/free-solid-svg-icons';
	import { Fa } from 'svelte-fa';

	let translatedExperiences = $derived(experiences[$locale === 'en' ? 'en' : 'ptBr']);
</script>

<main
	id="main-content"
	class="container min-h-[--view-height] w-screen gap-y-10 overflow-x-hidden py-8 lg:px-20"
>
	<h1 class="text-left text-4xl font-bold">
		{$t('cv.name')}
	</h1>

	<section class="mt-6">
		<p class="text-lg">{$t('cv.aboutMe')}</p>
	</section>

	<nav class="my-5 flex flex-wrap gap-3">
		<a
			class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary"
			href={$t('cv.website')}
		>
			<Fa icon={faEarthAmericas} class="h-5 w-5" />
			<span class="block">Website</span>
			<span class="hidden">{$t('cv.website')}</span>
		</a>
		<a
			class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary"
			href={$t('cv.github')}
		>
			<Fa icon={faGithub} class="h-5 w-5" />
			<span class="block">GitHub</span>
			<span class="hidden">{$t('cv.github')}</span>
		</a>
		<a
			class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary"
			href={$t('cv.linkedin')}
		>
			<Fa icon={faLinkedin} class="h-5 w-5" />
			<span class="block">LinkedIn</span>
			<span class="hidden">{$t('cv.linkedin')}</span>
		</a>
	</nav>

	<section class="mt-4">
		<h2 class="border-l-[3px] border-brand-700 pl-4 text-2xl font-bold dark:border-brand-500">
			{$t('cv.experience.title')}
		</h2>
		<ul class="ml-[1px] mt-2 border-l border-brand-600 pl-4 dark:border-brand-400">
			{#each translatedExperiences as { company, period, projects, warning }}
				<li class="mt-2">
					<h3 class="flex h-8 items-center text-lg font-bold text-brand-600 dark:text-brand-500">
						{company}

						{#if warning}
							<p
								class="ml-1 flex h-5 w-fit items-center gap-1 rounded-full border border-yellow-200 bg-yellow-50 px-2 text-sm font-normal text-yellow-500"
							>
								<Fa icon={faWarning} class="size-3" />
								{warning}
							</p>
						{/if}
					</h3>
					<p class="text-sm text-brand-600">{period}</p>

					<ul class="mt-2 flex flex-col gap-4 divide-y">
						{#each projects as { description, name, stack }}
							<li class="relative py-4">
								<h4 class="text-base font-bold">{name}</h4>

								<p class="my-1 mb-4 text-primary/75">
									{description}
								</p>

								<ul class="flex flex-wrap items-center gap-2">
									<li>Tecnologias usadas:</li>

									{#each stack as tech}
										<li
											class="flex h-5 items-center whitespace-nowrap text-nowrap rounded-full bg-muted px-3 text-xs leading-none text-muted-foreground"
										>
											{tech}
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

	<section class="mt-4">
		<h2 class="border-l-[3px] border-brand-700 pl-4 text-2xl font-bold dark:border-brand-500">
			{$t('cv.education.title')}
		</h2>

		<ul class="ml-[1px] mt-2 border-l border-brand-600 pl-4 dark:border-brand-400">
			<li class="mt-2">
				<p class="mt-2 text-primary/75">{$t('cv.education.education')}</p>
			</li>
			<li class="mt-2 flex flex-wrap gap-2">
				{#each $t('cv.education.courses').split(', ') as it}
					<p
						class="relative text-sm after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded after:bg-brand-600"
					>
						{it}
					</p>
				{/each}
			</li>
		</ul>
	</section>
</main>
