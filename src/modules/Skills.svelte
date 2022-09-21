<!-- TYPESCRIPT -->
<script lang="ts">
	import SectionLayout from '$layouts/SectionLayout.svelte';
	import Skill from '$lib/Skill.svelte';
	import Timelime from '$lib/Timelime.svelte';

	const svgRepoBaseUrl = 'https://www.svgrepo.com/show';

	const skills = [
		{
			image: svgRepoBaseUrl + '/303600/typescript-logo.svg',
			name: 'Typescript'
		},
		{
			image: svgRepoBaseUrl + '/355081/js.svg',
			name: 'Javascript'
		},
		{
			image: svgRepoBaseUrl + '/303208/php-1-logo.svg',
			name: 'PHP'
		},
		{
			image: svgRepoBaseUrl + '/353631/dart.svg',
			name: 'Dart'
		},
		{
			image: svgRepoBaseUrl + '/354259/react.svg',
			name: 'React JS'
		},
		{
			image: svgRepoBaseUrl + '/369457/nextjs.svg',
			name: 'Next JS'
		},
		{
			image: svgRepoBaseUrl + '/349522/svelte.svg',
			name: 'Svelte'
		},
		{
			image: svgRepoBaseUrl + '/349522/svelte.svg',
			name: 'SvelteKit'
		},
		{
			image: svgRepoBaseUrl + '/353751/flutter.svg',
			name: 'Flutter'
		},
		{
			image: svgRepoBaseUrl + '/354987/figma.svg',
			name: 'Figma'
		},
		{
			image: svgRepoBaseUrl + '/373623/git.svg',
			name: 'Git'
		},
		{
			image: svgRepoBaseUrl + '/330512/github.svg',
			name: 'Github'
		},
		{
			image: svgRepoBaseUrl + '/349502/sass.svg',
			name: 'SCSS'
		},
		{
			image: svgRepoBaseUrl + '/373535/css.svg',
			name: 'CSS'
		},
		{
			image: svgRepoBaseUrl + '/353884/html-5.svg',
			name: 'HTML'
		}
	];
</script>

<!-- HTML -->
<section>
	<ul>
		{#each skills as skill}
			<li>
				<Skill image={skill.image}>{skill.name}</Skill>
			</li>
		{/each}
	</ul>

	<Timelime />

	<article>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem vitae aspernatur
		odit distinctio, dolore soluta cum sapiente ea aut consequatur tempora recusandae eligendi vel
		sequi in. Vero, possimus fugiat. Possimus perferendis ipsa mollitia inventore quibusdam iusto
		fuga aspernatur quod molestiae, eum pariatur, ex cumque voluptates accusamus. Voluptatum
		corrupti molestias culpa animi suscipit? Mollitia in illo corrupti dolorum perspiciatis, laborum
		ex totam repellat nihil cupiditate nesciunt ducimus eveniet ut aliquam praesentium optio velit
		animi sint ipsam at nisi. Et, dolores! Unde perferendis illo commodi animi non, pariatur quos
		nemo, quo voluptatem doloribus ut voluptate ducimus. Quam rem vel pariatur unde?
	</article>
</section>

<!-- STYLES - SCSS -->
<style lang="scss">
	ul {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>
