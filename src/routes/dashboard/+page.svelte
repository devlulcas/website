<script lang="ts">
  import Button from '$/lib/components/button/button.svelte';
  import { enhance } from '$app/forms';
  import { BinaryIcon, BookmarkIcon, BrainIcon, ContactIcon, TagsIcon } from 'lucide-svelte';
  export let data;

  const getUserName = () => {
    const email = data.session?.user?.email;

    if (email) {
      return email.split('@')[0];
    }

    return 'there';
  };
</script>

<div class="flex items-center justify-between gap-2">
  <h2 class="flex gap-2 text-2xl font-bold text-foreground">
    <span>Hi</span>
    <span class="text-brand-600">{getUserName()}!</span>
  </h2>

  <form method="post" action="/auth/?/signOut" use:enhance>
    <Button variant="destructive" type="submit">Sign Out</Button>
  </form>
</div>

<ul class="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
  <li>
    <a href="/dashboard/bookmarks" class="block rounded border bg-secondary p-2 text-secondary-foreground">
      <h3 class="flex items-center gap-2 text-xl font-bold">
        <BookmarkIcon />
        Bookmarks
      </h3>
      <p class="text-lg">Manage your bookmarks</p>
    </a>
  </li>
  <li>
    <a href="/dashboard/projects" class="block rounded border bg-secondary p-2 text-secondary-foreground">
      <h3 class="flex items-center gap-2 text-xl font-bold">
        <BinaryIcon />

        Projects
      </h3>
      <p class="text-lg">Manage your projects</p>
    </a>
  </li>
  <li>
    <a href="/dashboard/tags" class="block rounded border bg-secondary p-2 text-secondary-foreground">
      <h3 class="flex items-center gap-2 text-xl font-bold">
        <TagsIcon />Tags
      </h3>
      <p class="text-lg">Manage your tags</p>
    </a>
  </li>
  <li>
    <a href="/dashboard/microblogs" class="block rounded border bg-secondary p-2 text-secondary-foreground">
      <h3 class="flex items-center gap-2 text-xl font-bold">
        <BrainIcon />Microblog
      </h3>
      <p class="text-lg">Share a thought</p>
    </a>
  </li>
  <li>
    <a href="/dashboard/contacts" class="block rounded border bg-secondary p-2 text-secondary-foreground">
      <h3 class="flex items-center gap-2 text-xl font-bold">
        <ContactIcon />Contact
      </h3>
      <p class="text-lg">Mailbox</p>
    </a>
  </li>
</ul>
