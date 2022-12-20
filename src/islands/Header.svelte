<script lang="ts">
  import MenuButton from "./MenuButton.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import NavItems from "./NavItems.svelte";
  import SwitchVisualMode from "./SwitchVisualMode.svelte";

  let mobileMenuIsOpen = false;
  const toggleNavigationModal = () => {
    mobileMenuIsOpen = !mobileMenuIsOpen;
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ];
</script>

<div class="placeholder" />
<header>
  <div class="wrapper menu-button">
    <MenuButton active={mobileMenuIsOpen} on:click={toggleNavigationModal} />
  </div>

  <a href="/" class="wrapper logo">
    <img
      src="/favicon.png"
      alt="logo"
      width={32}
      height={35}
      decoding="async"
      loading="lazy"
      style="aspect-ratio: auto {32} / {35};"
    />
  </a>

  <div class="wrapper nav">
    <NavItems items={links} />
  </div>

  <div class="wrapper">
    <div>
      <SwitchVisualMode />
    </div>
  </div>
</header>

{#if mobileMenuIsOpen}
  <MobileMenu items={links} toggle={toggleNavigationModal} />
{/if}

<style>
  .placeholder {
    height: var(--header-height);
  }

  header {
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--header-height);
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: hsl(0 0% 90% / 25%);
    color: var(--primary);
    backdrop-filter: blur(1rem);
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .wrapper:last-child {
    justify-content: flex-end;
  }

  .logo {
    justify-content: center;
  }

  .nav {
    display: none;
  }
  @media screen and (min-width: 90rem) {
    .menu-button {
      display: none;
    }

    .logo {
      justify-content: flex-start;
    }

    .nav {
      display: flex;
    }
  }
</style>
