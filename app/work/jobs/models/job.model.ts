export class JobModel {
	public companyName: string;

	public location: string;

	public position: string;

	public dateStart: string;

	public dateEnd: string;

	public jobDescription: string[];

	public publicProjects: string[];

	constructor({ companyName, location, position, dateStart, dateEnd, jobDescription, publicProjects }: JobModel) {
		this.companyName = companyName;
		this.location = location;
		this.position = position;
		this.dateStart = dateStart;
		this.dateEnd = dateEnd;
		this.jobDescription = jobDescription;
		this.publicProjects = publicProjects;
	}
}
