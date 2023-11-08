<script lang="ts">
  import { ContactIcon } from 'lucide-svelte';

  export let data;

  const formatDate = (data: Date) => {
    const intl = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return intl.format(data);
  };
</script>

<h2 class="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
  <ContactIcon />
  Contacts
</h2>

<table class="rounded border">
  <thead class="bg-secondary text-secondary-foreground">
    <tr>
      <th scope="col" class="px-6 py-4 text-left"> Name </th>
      <th scope="col" class="px-6 py-4 text-left"> Message </th>
      <th scope="col" class="px-6 py-4 text-left"> Email </th>
      <th scope="col" class="px-6 py-4 text-left"> Date </th>
    </tr>
  </thead>
  <tbody>
    {#each data.contacts as contact}
      <tr class="border-b">
        <td class="px-6 py-4">
          {contact.name}
        </td>
        <td class="px-6 py-4">
          {contact.message}
        </td>
        <td class="px-6 py-4">
          {contact.email}
        </td>
        <td class="px-6 py-4">
          {formatDate(contact.createdAt)}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
