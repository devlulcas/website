<script lang="ts">
  import { website } from '$/lib/assets/config';
  import { locale, t } from '$/lib/i18n';
  import { enhance } from '$app/forms';
  import customContactDrawingSvg from '$lib/assets/images/contact.svg';
  import sadRaccoonSvg from '$lib/assets/images/failure.svg';
  import loadingRaccoonGif from '$lib/assets/images/loading.gif';
  import type { SubmitFunction } from '@sveltejs/kit';
  import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-svelte';
  import SocialMediaLink from './social-media-link.svelte';

  type FormResult = {
    type: string;
    message: { ptBr: string; en: string };
  };

  let formResultMessage: string;

  let formState: 'idle' | 'submitting' | 'success' | 'failure' = 'idle';

  const contactEnhance: SubmitFunction = ({ formElement }) => {
    if (formState === 'submitting') return;

    formState = 'submitting';

    return async ({ result, update }) => {
      await update();

      if (result.type === 'success' || result.type === 'failure') {
        formState = result.type;
        formElement.reset();

        console.log(result.data);

        const resultDataIsFormResult = (data: unknown): data is FormResult => {
          return typeof data === 'object' && data !== null && 'type' in data && 'message' in data;
        };

        if (resultDataIsFormResult(result)) {
          formResultMessage = locale.get() === 'pt' ? result.message.ptBr : result.message.en;
        }
      }
    };
  };
</script>

<div class="flex min-h-[--view-height] flex-col gap-4 lg:flex-row">
  <form class="flex flex-1 flex-col gap-4" method="POST" action="/?/sendMessage" use:enhance={contactEnhance}>
    <div>
      <label class="mb-2 flex w-full flex-col text-muted-foreground" for="name">
        {$t('home.contact.form.name.label')}
      </label>
      <input
        required
        placeholder={$t('home.contact.form.name.placeholder')}
        class="w-full rounded-lg border bg-background p-2 text-foreground"
        type="text"
        id="name"
        name="name"
      />
    </div>

    <div>
      <label class="mb-2 flex w-full flex-col text-muted-foreground" for="email">
        {$t('home.contact.form.email.label')}
      </label>
      <input
        required
        placeholder={$t('home.contact.form.email.placeholder')}
        class="w-full rounded-lg border bg-background p-2 text-foreground"
        type="email"
        id="email"
        name="email"
      />
    </div>

    <div>
      <label class="mb-2 flex w-full flex-col text-muted-foreground" for="message">
        {$t('home.contact.form.message.label')}
      </label>
      <textarea
        placeholder={$t('home.contact.form.message.placeholder')}
        required
        class="max-h-[200px] w-full rounded-lg border bg-background p-2 text-foreground"
        id="message"
        name="message"
      />
    </div>

    <input type="text" name="avocado" class="hidden" aria-hidden="true" tabindex="-1" autocomplete="off" />

    {#if formState === 'submitting'}
      <img
        alt="raccoon rolling around by https://www.baamboozle.com"
        src={loadingRaccoonGif}
        width="100"
        height="100"
        class="mx-auto my-auto"
      />
      <p class="mt-1 text-sm italic text-muted-foreground">
        {$t('home.contact.form.submit.submitting')}
      </p>
    {/if}

    {#if formState === 'success'}
      <p class="mt-1 text-sm italic text-green-500">
        {formResultMessage ? formResultMessage : $t('home.contact.form.submit.success')}
      </p>
    {/if}

    {#if formState === 'failure'}
      <img alt="sad raccoon" src={sadRaccoonSvg} width="100" height="100" class="mx-auto my-auto" />
      <p class="mt-1 text-sm italic text-red-500">
        {formResultMessage ? formResultMessage : $t('home.contact.form.submit.failure')}
      </p>
    {/if}

    <button
      class="lc-gradient h-12 w-full rounded-lg p-2 font-bold text-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:bg-brand-400 disabled:opacity-50 disabled:hover:bg-brand-400"
      type="submit"
      disabled={formState === 'submitting'}
    >
      {formState === 'submitting' ? $t('home.contact.form.submit.submitting') : $t('home.contact.form.submit.idle')}
    </button>

    <nav class="mt-12 flex justify-evenly">
      <SocialMediaLink href={website.social.github} title="/"><GithubIcon /></SocialMediaLink>
      <SocialMediaLink href={website.social.linkedIn} title="/"><LinkedinIcon /></SocialMediaLink>
      <SocialMediaLink href={website.social.twitter} title="/"><TwitterIcon /></SocialMediaLink>
      <SocialMediaLink href={website.social.email} title="/"><MailIcon /></SocialMediaLink>
    </nav>
  </form>

  <div class="flex flex-1 flex-col items-center justify-center rounded-lg">
    <img
      alt="a simple, hand-drawn illustration of myself writing the bits for 'hi!' with a pencil"
      src={customContactDrawingSvg}
      class="h-64 w-auto rounded-lg mix-blend-difference lg:h-auto lg:w-10/12"
    />
  </div>
</div>
