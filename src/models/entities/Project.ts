import type { ProjectInterface } from "../interfaces/Project";
import type { Image } from "../types/Image";

class Project implements ProjectInterface {
	name: string;
	description: string;
	previewImage: Image;
	liveUrl: string;
	codeUrl: string;
	techs: string[];
	moreImages: Image[];

	constructor(projectData: any) {
		this.name = projectData.name;
		this.description = projectData.description;
		this.previewImage.src = projectData.previewImage.src;
		this.previewImage.alt = projectData.previewImage.alt;
		this.liveUrl = projectData.liveUrl;
		this.codeUrl = projectData.codeUrl;
	}
}

export { Project };
