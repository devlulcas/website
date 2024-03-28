<script lang="ts">
  import icon from '$/lib/assets/images/icon.svg';
  import { MenuIcon } from 'lucide-svelte';
  import DesktopNavigation from './desktop-navigation.svelte';
  import LocaleForm from './locale-form.svelte';
  import MobileNavigation from './mobile-navigation.svelte';
  import ThemeForm from './theme-form.svelte';

  let open = false;
</script>

<header
  class="lc-grid sticky top-0 z-50 flex h-[--header-height] items-center justify-center gap-2 bg-gradient-to-b from-background/75 to-transparent md:p-1"
>
  <nav
    class="col-span-12 col-start-1 flex h-full items-center justify-between gap-2 border bg-card/75 p-1 text-card-foreground backdrop-blur-md dark:bg-card/75 md:rounded-2xl lg:col-span-8 lg:col-start-3"
  >
    <a href="/">
      <img class="h-12 w-12 rounded lg:rounded-xl" src={icon} alt="Lucas Alves Rego" />
    </a>

    <div class="flex items-center gap-2">
      <DesktopNavigation />
      <LocaleForm />
      <ThemeForm />

      <button
        title="Menu"
        aria-label="Menu"
        on:click={() => (open = !open)}
        class="flex h-12 w-12 items-center justify-center rounded-lg border bg-background/90 text-foreground backdrop-blur-md md:rounded-xl lg:hidden"
      >
        <MenuIcon size={24} class="text-foreground" />
      </button>
    </div>
  </nav>
</header>

<MobileNavigation {open} />
