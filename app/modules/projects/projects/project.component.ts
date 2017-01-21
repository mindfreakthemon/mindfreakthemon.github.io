import { Component, Input } from '@angular/core';
import { ProjectModel } from './models/project.model';

@Component({
	moduleId: module.id,
	selector: 'project',
	templateUrl: 'tmpl/project.html',
	styleUrls: ['styles/project.css']
})
export class ProjectComponent {
	@Input()
	project: ProjectModel;
}
