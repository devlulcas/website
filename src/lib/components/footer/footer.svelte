<script lang="ts">
  import { website } from '$/lib/assets/config';
  import { GithubIcon, LinkedinIcon } from 'lucide-svelte';
</script>

<footer
  class="flex h-[--footer-height] items-center p-3 justify-center text-brand-700 print:hidden"
>
  <a
    class="flex items-center gap-2 h-10 w-10 rounded hover:bg-opacity-50 bg-white bg-opacity-0 justify-center"
    href={website.social.linkedIn}
    title="LinkedIn"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <LinkedinIcon />
  </a>

  <a
    class="flex items-center gap-2 h-10 w-10 rounded hover:bg-opacity-50 bg-white bg-opacity-0 justify-center"
    href={website.social.github}
    target="_blank"
    title="GitHub"
    aria-label="GitHub"
    rel="noopener noreferrer"
  >
    <GithubIcon />
  </a>
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
      background: linear-gradient(
        75deg,
        var(--brand-dark) 25%,
        var(--brand-light) 50%,
        var(--brand-dark) 75%
      );
    }

    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      inset: 0;
      background-size: 1em 1em;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0.1) 0.1em,
          transparent 0.1em
        ),
        linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.1) 0.1em,
          transparent 0.1em
        );
    }
  }
</style>
