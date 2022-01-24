export class Project {
	name = 'Placeholder';

	description = 'A place for a future project';

	previewImage = {
		src: '/images/screenshots/placeholder.jpg',
		alt: 'nothing here yet'
	};

	urls = {
		liveUrl: '/notonline',
		codeUrl: 'https://github.com/devlulcas/',
		moreInfoUrl: '/notonline'
	};

	techs = ['NOTHING', 'NOTHING', 'NOTHING', 'NOTHING', 'NOTHING'];

	moreImages = [];

	constructor(name = 'Placeholder') {
		this.name = name;
	}

	addDescription(description) {
		this.description = description;
		return this;
	}

	addPreview(src, description) {
		this.addPreviewSource(src);
		this.addPreviewDescription(description);
		return this;
	}

	addPreviewSource(src) {
		this.previewImage.src = `/images/screenshots/${src}`;
		return this;
	}

	addPreviewDescription(description) {
		this.previewImage.alt = description;
		return this;
	}

	addLiveUrl(url) {
		this.urls.liveUrl = url;
		return this;
	}

	addCodeUrl(url) {
		this.urls.codeUrl = url;
		return this;
	}

	addMoreInfoUrl(url) {
		this.urls.moreInfoUrl = url;
		return this;
	}

	addTechs(techs) {
		this.techs = techs;
		return this;
	}

	addMoreImages(src, alt) {
		this.moreImages.push({ src: `/images/more/${src}`, alt });
		return this;
	}
}
