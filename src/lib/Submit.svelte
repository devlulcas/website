<!--TS-->
<script lang="ts">
  import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";

  import { content } from "$stores/Translation";
</script>

<!--HTML-->
<div class="button-container">
  <button>
    {$content.contact.submitButton}
    <Fa icon={faPaperPlane} />
  </button>
  <div class="divider" />
</div>

<!--CSS-->
<style lang="postcss">
  .button-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2%;
  }

  button {
    background: var(--primary);
    color: var(--on-primary);
    font-size: 1.2rem;
    font-weight: 800;
    padding: 1rem 1.5rem;
    border: 0.3rem solid var(--on-primary);
    border-radius: 2rem;
    z-index: 1;
    color: var(--on-primary);
    cursor: pointer;
    transition: 0.5s;
    width: 30%;

    @media screen and (max-width: 70rem) {
      width: 80%;
    }

    &:hover {
      color: var(--secondary);

      & + .divider {
        height: 1.2rem;
        width: 80%;
        background: var(--secondary);
      }
    }
  }

  .divider {
    height: 0.5rem;
    width: 60%;
    border-radius: 5rem;
    position: absolute;
    transition: 0.5s;
    background: var(--primary);
  }
</style>
