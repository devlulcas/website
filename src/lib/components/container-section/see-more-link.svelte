<script lang="ts">
  export let href: string;
  export let target: string = '_blank';
  export let rel: string = 'noopener noreferrer';
</script>

<a
  href="https://github.com/devlulcas"
  target="_blank"
  class="mt-8 flex items-center gap-2 rounded-lg border px-4 py-2 text-accent-foreground"
>
  <slot name="start-icon" />

  <a {href} {target} {rel} class="flex-1">
    <slot />
  </a>

  <span class="ml-auto">
    <slot name="end-icon" />
  </span>
</a>
