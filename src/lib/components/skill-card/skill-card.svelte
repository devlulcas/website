<script lang="ts">
  import type { Skill } from '$/lib/assets/config';

  export let skill: Skill;
</script>

<a
  href={skill.url}
  title={skill.name}
  class="bg-dark/10 relative flex aspect-square w-20 items-center justify-center rounded dark:border dark:bg-white/10 lg:w-28"
>
  <div class="absolute inset-0 z-10 flex h-full w-full items-center justify-center backdrop-blur-md">
    <img src={skill.image} alt={skill.name} class="aspect-square w-1/2" />
  </div>

  <img src={skill.image} alt={skill.name} class="aspect-square w-1/2 animate-pulse opacity-75" />
</a>

<style lang="postcss">
</style>
