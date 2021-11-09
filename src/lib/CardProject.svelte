<!--JAVASCRIPT-->
<script>
	export let project = {
		name: 'Project',
		description: 'A good one',
		previewImage: {
			src: '/images/heroImage.jpg',
			description: 'my cool project'
		},
		urls: {
			liveUrl: 'https://amazing.net',
			codeUrl: 'https://amazing/code.net',
			moreInfoUrl: '/aboutthe'
		},
		techs: ['magic', 'love', 'code']
	};
</script>

<!--HTML-->
<div class="card">
	<div class="image-container">
		<img src={project.previewImage.src} alt={project.previewImage.alt} />
		<ul>
			{#each project.techs as tech}
				<li>{tech}</li>
			{/each}
		</ul>
	</div>
	<section>
		<h2>{project.name}</h2>
		<div class="information-container">
			<p>
				<i class="fa fa-code" />
				{project.description}
			</p>
			<a href={project.urls.liveUrl} target="_blank" rel="noopener noreferrer">
				<i class="fa fa-code" />
				Live
			</a>
			<a href={project.urls.codeUrl} target="_blank" rel="noopener noreferrer">
				<i class="fa fa-code" />
				Github
			</a>
		</div>
		<a href={project.urls.moreInfoUrl} title="More information">...</a>
	</section>
</div>

<!--CSS-->
<style>
	.card {
		width: 100%;
		height: 100%;
		border-radius: 2rem;
		overflow: hidden;
		background: var(--white);
		outline: 0.4rem solid var(--black);
	}

	.image-container {
		width: 100%;
		height: 50%;
		overflow: hidden;
		position: relative;
	}

	img {
		width: 100%;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
		position: absolute;
		z-index: 1;
		bottom: 1rem;
	}

	li {
		background: var(--white);
		color: var(--black);
		padding: 1rem;
		font-size: 2rem;
	}

	@media screen and (max-width: 75rem) {
    .card {
    }
	}
</style>
