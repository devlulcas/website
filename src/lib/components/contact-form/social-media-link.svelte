<script lang="ts">
  export let href: string;
  export let title: string;
</script>

<a
  class="rounded-full border border-foreground/25 bg-foreground/10 p-4 hover:bg-foreground/25"
  {href}
  target="_blank"
  rel="noopener noreferrer"
  {title}
>
  <slot />
</a>
