import { Injectable } from '@angular/core';
import { ProjectModel, ProjectCategory } from '../models/project.model';

@Injectable()
export class ProjectsService {

	private cache: ProjectModel[];

	getProjects(): Promise<ProjectModel[]> {
		if (this.cache) {
			return Promise.resolve(this.cache);
		}

		return fetch('/build/statics/data/projects.json')
			.then((response: Response) => response.json())
			.then((json) => {
				let array = json.data;

				return this.cache = array.map((item) => this.getProject(item));
			});
	}

	getParticularSetOfProjects(category: ProjectCategory): Promise<ProjectModel[]> {
		return this.getProjects()
			.then((projects) => projects.filter((project) => project.category === category));
	}

	getProject(data: any): ProjectModel {
		return new ProjectModel();
	}

}
