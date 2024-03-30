<script lang="ts">
  import { experiences } from '$/lib/assets/config';
  import { locale, t } from '$/lib/i18n';
  import { EarthIcon, GithubIcon, LinkedinIcon } from 'lucide-svelte';
  $: translatedExperiences = experiences[$locale === 'en' ? 'en' : 'ptBr'];
</script>

<main class="container min-h-[--view-height] w-screen gap-y-10 overflow-x-hidden px-4 py-8 pb-8 lg:px-20">
  <h1 class="text-left text-4xl font-bold print:text-black">
    {$t('cv.name')}
  </h1>

  <section class="mt-2">
    <p class="text-lg print:text-black">{$t('cv.aboutMe')}</p>
  </section>

  <nav class="my-4 flex gap-3">
    <a
      class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border border-brand-700 bg-primary/10 px-4 py-2 text-primary print:border-black print:text-black"
      href={$t('cv.website')}
    >
      <EarthIcon class="h-5 w-5 print:hidden" />
      <span class="block print:hidden">Website</span>
      <span class="hidden print:block">{$t('cv.website')}</span>
    </a>
    <a
      class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border border-brand-700 bg-primary/10 px-4 py-2 text-primary print:border-black print:text-black"
      href={$t('cv.github')}
    >
      <GithubIcon class="h-5 w-5 print:hidden" />
      <span class="block print:hidden">GitHub</span>
      <span class="hidden print:block">{$t('cv.github')}</span>
    </a>
    <a
      class="flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border border-brand-700 bg-primary/10 px-4 py-2 text-primary print:border-black print:text-black"
      href={$t('cv.linkedin')}
    >
      <LinkedinIcon class="h-5 w-5 print:hidden" />
      <span class="block print:hidden">LinkedIn</span>
      <span class="hidden print:block">{$t('cv.linkedin')}</span>
    </a>
  </nav>

  <section class="mt-4">
    <h2 class="text-2xl font-bold print:text-black">{$t('cv.experience.title')}</h2>
    <ul class="mt-2 border-l border-brand-400 pl-4 print:border-black">
      {#each translatedExperiences as { company, period, projects }}
        <li class="mt-2">
          <h3 class="text-lg font-bold text-brand-500 print:text-black">{company}</h3>
          <p class="text-sm text-brand-600 print:text-black">{period}</p>

          <ul class="mt-2 flex flex-col gap-4 divide-y">
            {#each projects as { description, name, stack }}
              <li class="py-4">
                <h4 class="text-base font-bold print:text-black">{name}</h4>

                <p class="my-2 text-sm text-primary/75 print:text-black">{description}</p>

                <ul class="flex flex-wrap gap-2">
                  {#each stack as stack}
                    <li
                      class="rounded bg-secondary-foreground px-2 py-0.5 text-sm text-secondary print:border print:border-black print:text-black"
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
