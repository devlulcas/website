<script lang="ts">
	import meSvg from '$/lib/assets/images/me.svg';
	import SkillCarousel from '$/lib/components/skill-carousel/skill-carousel.svelte';
	import { t } from '$/lib/i18n';
</script>

<div class="lc-grid min-h-[--view-height]">
	<main class="col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 mt-12 px-4">
		<div class="flex flex-col lg:flex-row gap-4">
			<div>
				<h1 class="text-4xl font-bold">
					{$t('about.title')}
				</h1>

				<p class="mb-8 text-muted-foreground">
					{$t('about.subtitle')}
				</p>

				<p>
					{$t('about.work.start')}
					<a
						class="text-brand-500 hover:text-brand-600"
						href="http://dantasbikes.com.br"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dantas Bikes
					</a>
					{$t('about.work.end')}
				</p>

				<article>
					<h2 class="mb-2 mt-4 text-xl">
						{$t('about.personal.title')}
					</h2>

					{$t('about.personal.description')}
				</article>

				<article>
					<h2 class="mb-2 mt-4 text-xl">
						{$t('about.skills.title')}
					</h2>

					{$t('about.skills.description')}
				</article>
			</div>

			<div class="w-full lg:h-[500px] flex items-center justify-center">
				<img src={meSvg} alt="Me" />
			</div>
		</div>

		<SkillCarousel class="my-8" />

		<p class="mb-12">
			{$t('about.contact.start')}
			<a class="text-brand-500 hover:text-brand-600" href="/#contact" target="_blank" rel="noopener noreferrer">
				#contact
			</a>
			{$t('about.contact.end')}
		</p>
	</main>
</div>
