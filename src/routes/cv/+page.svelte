<script lang="ts">
  import { experiences } from '$/lib/assets/config';
  import { locale, t } from '$/lib/i18n';
  import { EarthIcon, GithubIcon, LinkedinIcon } from 'lucide-svelte';
  $: translatedExperiences = experiences[$locale === 'en' ? 'en' : 'ptBr'];
</script>

<main
  class="mx-auto min-h-[--view-height] w-screen max-w-prose gap-y-10 overflow-x-hidden px-4 py-8 print:mx-0 print:max-w-full"
>
  <h1 class="text-left text-4xl font-bold">
    {$t('cv.name')}
  </h1>

  <section class="mt-6">
    <p class="text-lg">{$t('cv.aboutMe')}</p>
  </section>

  <nav class="my-4 flex flex-wrap gap-3">
    <a
      class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary print:px-2 print:py-1"
      href={$t('cv.website')}
    >
      <EarthIcon class="h-5 w-5 print:hidden" />
      <span class="block print:hidden">Website</span>
      <span class="hidden print:block">{$t('cv.website')}</span>
    </a>
    <a
      class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary print:px-2 print:py-1"
      href={$t('cv.github')}
    >
      <GithubIcon class="h-5 w-5 print:hidden" />
      <span class="block print:hidden">GitHub</span>
      <span class="hidden print:block">{$t('cv.github')}</span>
    </a>
    <a
      class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border bg-primary-foreground px-4 py-2 text-primary print:px-2 print:py-1"
      href={$t('cv.linkedin')}
    >
      <LinkedinIcon class="h-5 w-5 print:hidden" />
      <span class="block print:hidden">LinkedIn</span>
      <span class="hidden print:block">{$t('cv.linkedin')}</span>
    </a>
  </nav>

  <section class="mt-4">
    <h2 class="border-l-[3px] border-brand-700 pl-4 text-2xl font-bold dark:border-brand-500">
      {$t('cv.experience.title')}
    </h2>
    <ul class="ml-[1px] mt-2 border-l border-brand-600 pl-4 dark:border-brand-400 print:border-black">
      {#each translatedExperiences as { company, period, projects }}
        <li class="mt-2 print:mt-1">
          <h3 class="text-lg font-bold text-brand-600 dark:text-brand-500">{company}</h3>
          <p class="text-sm text-brand-600">{period}</p>

          <ul class="mt-2 flex flex-col gap-4 divide-y print:divide-y-0">
            {#each projects as { description, name, stack }}
              <li class="relative py-4 print:py-2">
                <h4 class="text-base font-bold">{name}</h4>

                <p class="my-1 mb-4 text-primary/75 print:mb-2">{description}</p>

                <ul class="flex flex-wrap gap-2">
                  {#each stack as stack}
                    <li
                      class="rounded bg-secondary-foreground px-2 py-0.5 text-xs text-secondary before:absolute before:-left-[1.2rem] before:top-1/2 before:h-[5px] before:w-[5px] before:translate-y-1/2 before:rounded-full before:bg-green-400 print:border print:before:hidden"
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
</main>
