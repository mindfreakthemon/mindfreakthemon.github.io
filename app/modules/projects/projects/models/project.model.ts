export class ProjectModel {
	public name: string;

	public category: string;

	public sourceURL: string;

	public liveURL: string;

	public description: string;

	constructor({ name, category, sourceURL, liveURL, description }: ProjectModel) {
		this.name = name;
		this.category = category;
		this.sourceURL = sourceURL;
		this.liveURL = liveURL;
		this.description = description;
	}
}
