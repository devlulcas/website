<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import NavBar from "$lib/NavBar.svelte";
	import "../app.css";

	const title = "DEVLULCAS";
	const url = "https://devlulcas.github.io";
	const image = {
		url: "https://www.example.com/images/og-image.jpg",
		alt: "screenshot of devlulcas website"
	};
	const description =
		"Software developer focused on web technologies like Typescript, PHP, Elixir, Svelte, React and Phoenix";
</script>

<SvelteSeo
	{title}
	{description}
	openGraph={{
		title,
		description,
		url,
		type: "website",
		images: [
			{
				url: image.url,
				width: 850,
				height: 650,
				alt: image.alt
			}
		]
	}}
/>

<NavBar />
<slot />
