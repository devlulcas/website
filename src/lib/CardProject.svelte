<!--JAVASCRIPT-->
<script>
	import ButtonSpin from './ButtonSpin.svelte';
	import Techpins from './Techpins.svelte';
	export let project;
</script>

<!--HEAD-->
<svelte:head>
	<link rel="prefetch" as="image" href={project.previewImage.src} />
</svelte:head>

<!--HTML-->
<div class="card">
	<div class="image-container">
		<img src={project.previewImage.src} alt={project.previewImage.alt} />
		<Techpins techs={project.techs} />
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
		<ButtonSpin href={project.urls.moreInfoUrl} label="More information" />
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
		border: 0.2rem solid var(--black);
		box-shadow: 0.5rem 0.8rem var(--black);
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
		border-bottom: 0.2rem solid var(--black);
	}

	img {
		position: absolute;
		height: 100%;
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

	i {
		width: 1ch;
	}
	a:hover {
		color: var(--dark-gray);
	}

	a:hover i {
		color: var(--dark-gray);
	}

	@media screen and (max-width: 75rem) {
		img {
			position: absolute;
			width: 165%;
		}

		.card {
			height: 90%;
		}

		.card:hover {
			transform: scale(1.01);
		}

		section {
			justify-content: center;
		}
		.about {
			width: 100%;
		}
		h2 {
			font-size: 2rem;
			text-align: center;
			margin: 0rem 0 3rem 0;
		}

		p {
			margin-bottom: 2rem;
		}
	}
</style>
