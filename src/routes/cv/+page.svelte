<script lang="ts">
	import { experiences } from '$/lib/assets/config/experiences';
	import IconDuoWorld from '$/lib/assets/icons/icon-duo-world.svelte';
	import IconUimExclamationTriangle from '$/lib/assets/icons/icon-uim-exclamation-triangle.svelte';
	import IconUimGithub from '$/lib/assets/icons/icon-uim-github.svelte';
	import IconUimLinkedin from '$/lib/assets/icons/icon-uim-linkedin.svelte';
	import SeoHead from '$/lib/components/seo-head/seo-head.svelte';
	import { locale, t } from '$/lib/i18n';

	let translatedExperiences = $derived(experiences[$locale === 'en' ? 'en' : 'ptBr']);
</script>

<SeoHead title="Curriculum vitae" />

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
			class="bg-primary-foreground text-primary flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border px-4 py-2"
			href={'https://' + $t('cv.website')}
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconDuoWorld class="size-5" />
			<span class="block">Website</span>
			<span class="hidden">{$t('cv.website')}</span>
		</a>
		<a
			class="bg-primary-foreground text-primary flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border px-4 py-2"
			href={'https://' + $t('cv.github')}
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconUimGithub class="size-5" />
			<span class="block">GitHub</span>
			<span class="hidden">{$t('cv.github')}</span>
		</a>
		<a
			class="bg-primary-foreground text-primary flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border px-4 py-2"
			href={'https://' + $t('cv.linkedin')}
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconUimLinkedin class="size-5" />
			<span class="block">LinkedIn</span>
			<span class="hidden">{$t('cv.linkedin')}</span>
		</a>
	</nav>

	<section class="mt-4">
		<h2 class="border-brand-700 dark:border-brand-500 border-l-[3px] pl-4 text-2xl font-bold">
			{$t('cv.experience.title')}
		</h2>
		<ul class="border-brand-600 dark:border-brand-400 mt-2 ml-[1px] border-l pl-4">
			{#each translatedExperiences as { company, period, projects, warning }}
				<li class="mt-2">
					<h3 class="text-brand-600 dark:text-brand-500 flex h-8 items-center text-lg font-bold">
						{company}

						{#if warning}
							<p
								class="ml-1 flex h-5 w-fit items-center gap-1 rounded-full border border-yellow-200 bg-yellow-50 px-2 text-sm font-normal text-yellow-500 lowercase dark:border-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300"
							>
								<IconUimExclamationTriangle class="size-3" />
								{warning}
							</p>
						{/if}
					</h3>
					<p class="text-brand-600 text-sm">{period}</p>

					<ul class="mt-2 flex flex-col gap-4 divide-y">
						{#each projects as { description, name, stack }}
							<li class="relative py-4">
								<h4 class="text-base font-bold">{name}</h4>

								<p class="text-primary/75 my-1 mb-4">
									{description}
								</p>

								<ul class="flex flex-wrap items-center gap-2">
									<li>Tecnologias usadas:</li>

									{#each stack as tech}
										<li
											class="bg-muted text-muted-foreground flex h-5 items-center rounded-full px-3 text-xs leading-none text-nowrap whitespace-nowrap"
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
		<h2 class="border-brand-700 dark:border-brand-500 border-l-[3px] pl-4 text-2xl font-bold">
			{$t('cv.education.title')}
		</h2>

		<ul class="border-brand-600 dark:border-brand-400 mt-2 ml-[1px] border-l pl-4">
			<li class="mt-2">
				<p class="text-primary/75 mt-2">{$t('cv.education.education')}</p>
			</li>
			<!-- <li class="mt-2 flex flex-wrap gap-2">
				{#each $t('cv.education.courses').split(', ') as it}
					<p
						class="relative text-sm after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded after:bg-brand-600"
					>
						{it}
					</p>
				{/each}
			</li> -->
		</ul>
	</section>
</main>
