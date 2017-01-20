import { Component, Input } from '@angular/core';
import { JobModel } from './models/job.model';

@Component({
	moduleId: module.id,
	selector: 'job',
	templateUrl: 'tmpl/job.html',
	styleUrls: ['styles/job.css']
})
export class JobComponent {
	@Input()
	job: JobModel;
}
