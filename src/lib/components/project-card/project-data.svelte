<script lang="ts">
	import { t } from '$/lib/i18n';
	import {
		faCss3Alt,
		faGithub,
		faGolang,
		faHtml5,
		faJs,
		faPhp,
		faVuejs
	} from '@fortawesome/free-brands-svg-icons';
	import {
		faArrowRight,
		faCode,
		faFile,
		faFlask,
		faK,
		faTerminal,
		type IconDefinition
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	type Props = {
		name: string;
		description: string;
		url: string | undefined;
		code: string | null;
		tags: string[];
		details?: string;
	};

	let { name, description, url, code, tags, details }: Props = $props();

	const langIcons: Record<string, IconDefinition> = {
		shell: faTerminal,
		html: faHtml5,
		css: faCss3Alt,
		typescript: faCode,
		javascript: faJs,
		rescript: faCode,
		makefile: faFile,
		svelte: faCode,
		vue: faVuejs,
		php: faPhp,
		kotlin: faK,
		elixir: faFlask,
		go: faGolang
	};

	const renderIcon = (lang: string) => langIcons[lang.toLowerCase()] ?? faCode;
</script>

<h3 class="line-clamp-1 text-xl font-semibold uppercase" title={name}>
	{name}
</h3>

<p class="mt-1 line-clamp-2 text-sm text-muted-foreground">
	{description}
</p>

{#if details && details.length > 0}
	<blockquote class="mt-1 line-clamp-5 border-l-2 pl-2 text-sm italic text-muted-foreground">
		{details}
	</blockquote>
{/if}

{#if tags.length > 0}
	<div class="mb-3 mt-auto flex flex-wrap gap-1 pt-2">
		{#each tags as tag}
			<span class="flex items-center text-xs">
				<span
					class="flex size-5 items-center justify-center rounded-l bg-muted text-muted-foreground"
				>
					<Fa icon={renderIcon(tag)} class="size-2.5" />
				</span>
				<span
					class="flex h-5 items-center justify-center rounded-r bg-muted pr-1 lowercase leading-none text-muted-foreground"
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
			<Fa icon={faGithub} class="size-4" />
			{$t('common.projects.seeCode')}
		</a>
	{/if}

	<a href={url ?? code} target="_blank" class="flex items-center gap-1 text-sm leading-none">
		{$t('common.projects.seeMore')}
		<Fa icon={faArrowRight} class="size-4" />
	</a>
</footer>
