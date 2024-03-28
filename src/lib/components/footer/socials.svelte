<script lang="ts">
  import { website } from '$/lib/assets/config';
  import { GithubIcon, LinkedinIcon } from 'lucide-svelte';
</script>

<p class="flex w-full flex-col gap-2">
  <a class="flex items-center gap-2" href={website.social.linkedIn} target="_blank" rel="noopener noreferrer">
    <LinkedinIcon />
    Lucas Alves Rego
  </a>

  <a class="flex items-center gap-2" href={website.social.github} target="_blank" rel="noopener noreferrer">
    <GithubIcon />

    github.com/devlulcas
  </a>
</p>
