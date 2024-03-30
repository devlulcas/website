<script lang="ts">
  import { website } from '$/lib/assets/config';
  import { t } from '$/lib/i18n';
  import { GithubIcon, LinkedinIcon } from 'lucide-svelte';
</script>

<footer class="flex h-[--footer-height] items-center p-3 text-white print:hidden">
  <div class="flex w-full flex-col gap-6 font-bold sm:flex-row">
    <a href="/" target="_blank" rel="noopener noreferrer" class="mr-auto">
      {$t('common.footer.codeAvailableOn')} devlulcas/website
    </a>

    <a
      class="flex items-center gap-2 whitespace-nowrap"
      href={website.social.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon />
      Lucas Alves Rego
    </a>

    <a
      class="flex items-center gap-2 whitespace-nowrap"
      href={website.social.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
      github.com/devlulcas
    </a>
  </div>
</footer>

<style lang="postcss">
  footer {
    position: relative;
    z-index: 10;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -2;
      height: 100%;
      background: linear-gradient(75deg, var(--brand-dark) 25%, var(--brand-light) 50%, var(--brand-dark) 75%);
    }

    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      inset: 0;
      background-size: 1em 1em;
      background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em),
        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em);
    }
  }
</style>
