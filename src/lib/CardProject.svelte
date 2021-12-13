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
		<div class="about">
			<h2>{project.name}</h2>
			<div class="information-container">
				<p>
					<i class="fa fa-code" />
					{project.description}
				</p>
				<a href={project.urls.liveUrl} target="_blank" rel="noopener noreferrer">
					<i class="fas fa-globe" />
					Live
				</a>
				<a href={project.urls.codeUrl} target="_blank" rel="noopener noreferrer">
					<i class="fab fa-github" />
					Github
				</a>
			</div>
		</div>
		<a class="more-info" href={project.urls.moreInfoUrl} title="More information">
			<i class="fas fa-ellipsis-h" />
		</a>
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
		outline: 0.2rem solid var(--black);
		box-shadow: 0 0.8rem var(--black);
		transition: transform 0.2s;
	}

	.card:hover {
		transform: scale(1.1);
	}

	.image-container {
		width: 100%;
		height: 50%;
		overflow: hidden;
		position: relative;
		outline: 0.2rem solid var(--black);
	}

	img {
		position: absolute;
		width: 100%;
	}

	.image-container:hover ul {
		opacity: 1;
	}
	ul {
		opacity: 0;
		transition: opacity ease 0.5s;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		position: absolute;
		z-index: 1;
		bottom: 0;
	}

	li {
		outline: 0.1rem solid var(--black);
		background: var(--white);
		margin: 1rem;
		flex-grow: 1;
		text-align: center;
		color: var(--black);
		padding: 1rem;
		font-size: 1.5rem;
		border-radius: 2rem;
		text-transform: uppercase;
		font-weight: 600;
	}

	section {
		height: 50%;
		padding: 1rem 2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	h2 {
		text-transform: capitalize;
		font-size: 3rem;
		margin: 1rem 0;
	}

	p {
		margin-bottom: 1rem;
	}

	p,
	a,
	i {
		color: var(--black);
	}
	p,
	a {
		font-size: 1.5rem;
		font-family: 'Montserrat', sans-serif;
	}

	a,
	i {
		margin-right: 1rem;
	}
	.more-info {
		font-size: 5rem;
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		background: var(--white);
		outline: 0.2rem solid var(--black);
		box-shadow: 0 0.5rem var(--black);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0;
		transition: transform 0.3s;
	}

	.more-info:hover {
		transform: scale(1.1);
	}

	.more-info:hover i {
		transform: rotate(360deg);
	}

	.more-info i {
		margin-right: 0;
		transition: transform 1s;
	}

	@media screen and (max-width: 75rem) {
		img {
			position: absolute;
			width: 165%;
		}

		li {
			font-size: 1rem;
		}

		.card {
			height: 90%;
		}

		h2 {
			margin: 0rem 0 3rem 0;
		}

		p {
			margin-bottom: 2rem;
		}
	}
</style>
