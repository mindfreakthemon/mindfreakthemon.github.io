import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel, ProjectCategory } from './models/project.model';
import { ProjectsService } from './services/projects.service';

@Component({
	moduleId: module.id,
	selector: 'projects',
	templateUrl: 'tmpl/projects.html',
	styleUrls: ['styles/projects.css']
})
export class ProjectsComponent implements OnInit {
	@Input()
	protected category: ProjectCategory;

	protected projects: ProjectModel[] = [];

	protected projectsService: ProjectsService;

	constructor(projectService: ProjectsService) {
		this.projectsService = projectService;
	}

	ngOnInit(): void {
		this.projectsService.getParticularSetOfProjects(this.category)
			.then((projects) => this.projects = projects);
	}
}
