<script lang="ts">
  import '$/lib/assets/styles/nprogress.css';
  import { fly } from 'svelte/transition';

  export let pathname = '';
</script>

{#key pathname}
  <div in:fly={{ x: -10, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
    <slot />
  </div>
{/key}
