<script lang="ts">
	import Button from '$/lib/components/button/button.svelte';
	import { enhance } from '$app/forms';
	import { BinaryIcon, BookmarkIcon, BrainIcon, TagsIcon } from 'lucide-svelte';
	export let data;

	const getUserName = () => {
		const email = data.session?.user?.email;

		if (email) {
			return email.split('@')[0];
		}

		return 'there';
	};
</script>

<div class="flex justify-between items-center gap-2">
	<h2 class="text-2xl font-bold text-foreground flex gap-2">
		<span>Hi</span>
		<span class="text-brand-600">{getUserName()}!</span>
	</h2>

	<form method="post" action="/auth/?/signOut" use:enhance>
		<Button variant="destructive" type="submit">Sign Out</Button>
	</form>
</div>

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
	<li>
		<a href="/dashboard/bookmarks" class="block border rounded bg-secondary text-secondary-foreground p-2">
			<h3 class="text-xl font-bold flex gap-2 items-center">
				<BookmarkIcon />
				Bookmarks
			</h3>
			<p class="text-lg">Manage your bookmarks</p>
		</a>
	</li>
	<li>
		<a href="/dashboard/projects" class="block border rounded bg-secondary text-secondary-foreground p-2">
			<h3 class="text-xl font-bold flex gap-2 items-center">
				<BinaryIcon />

				Projects
			</h3>
			<p class="text-lg">Manage your projects</p>
		</a>
	</li>
	<li>
		<a href="/dashboard/tags" class="block border rounded bg-secondary text-secondary-foreground p-2">
			<h3 class="text-xl font-bold flex gap-2 items-center">
				<TagsIcon />Tags
			</h3>
			<p class="text-lg">Manage your tags</p>
		</a>
	</li>
	<li>
		<a href="/dashboard/tags" class="block border rounded bg-secondary text-secondary-foreground p-2">
			<h3 class="text-xl font-bold flex gap-2 items-center">
				<BrainIcon />Microblog
			</h3>
			<p class="text-lg">Share a thought</p>
		</a>
	</li>
</ul>
