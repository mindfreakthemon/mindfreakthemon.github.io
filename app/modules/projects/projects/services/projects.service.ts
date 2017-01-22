import { Injectable } from '@angular/core';
import { AbstractDataService } from '../../../common/services/abstract-data.service';
import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectsService extends AbstractDataService<ProjectModel> {

	getParticularSetOfProjects(category: string): Promise<ProjectModel[]> {
		return this.getList()
			.then((projects) => projects.filter((project) => project.category === category));
	}

	createInstance(data: any): ProjectModel {
		return new ProjectModel(data);
	}

	fetch(): Promise<Response> {
		return fetch('/build/statics/data/projects.json');
	}
}
