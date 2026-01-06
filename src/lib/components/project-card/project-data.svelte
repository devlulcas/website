<script lang="ts">
	import IconFaCode from '$/lib/assets/icons/icon-fa-code.svelte';
	import IconUimArrowUpRight from '$/lib/assets/icons/icon-uim-arrow-up-right.svelte';
	import IconUimGithub from '$/lib/assets/icons/icon-uim-github.svelte';
	import { t } from '$/lib/i18n';

	type Props = {
		name: string;
		description: string;
		url: string | undefined;
		code: string | null;
		tags: string[];
		details?: string;
	};

	let { name, description, url, code, tags, details }: Props = $props();

	const langIcons: Record<string, typeof IconFaCode> = {
		shell: IconFaCode,
		html: IconFaCode,
		css: IconFaCode,
		typescript: IconFaCode,
		javascript: IconFaCode,
		rescript: IconFaCode,
		makefile: IconFaCode,
		svelte: IconFaCode,
		vue: IconFaCode,
		php: IconFaCode,
		kotlin: IconFaCode,
		elixir: IconFaCode,
		go: IconFaCode
	};

	const renderIcon = (lang: string) => langIcons[lang.toLowerCase()] ?? IconFaCode;
</script>

<h3 class="line-clamp-1 text-xl font-semibold uppercase" title={name}>
	{name}
</h3>

<p class="text-muted-foreground mt-1 line-clamp-2 text-sm">
	{description}
</p>

{#if details && details.length > 0}
	<blockquote class="text-muted-foreground mt-1 line-clamp-5 border-l-2 pl-2 text-sm italic">
		{details}
	</blockquote>
{/if}

{#if tags.length > 0}
	<div class="mt-auto mb-3 flex flex-wrap gap-1 pt-2">
		{#each tags as tag}
			{@const Icon = renderIcon(tag)}
			<span class="flex items-center text-xs">
				<span
					class="bg-muted text-muted-foreground flex size-5 items-center justify-center rounded-l"
				>
					<Icon class="size-2.5" />
				</span>
				<span
					class="bg-muted text-muted-foreground flex h-5 items-center justify-center rounded-r pr-1 leading-none lowercase"
				>
					{tag}
				</span>
			</span>
		{/each}
	</div>
{/if}

<footer class="mt-auto flex items-center justify-between">
	{#if code}
		<a href={code} target="_blank" class="flex items-center gap-1 text-sm leading-none">
			<IconUimGithub class="size-4" />
			{$t('common.projects.seeCode')}
		</a>
	{/if}

	<a href={url ?? code} target="_blank" class="flex items-center gap-1 text-sm leading-none">
		{$t('common.projects.seeMore')}
		<IconUimArrowUpRight class="size-4" />
	</a>
</footer>
