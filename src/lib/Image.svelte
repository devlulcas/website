<script lang="ts">
	export let src: string;
	export let alt: string;
	export let width: number;
	export let height: number;
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	decoding="async"
	loading="lazy"
	style="aspect-ratio: auto {width} / {height};"
/>
