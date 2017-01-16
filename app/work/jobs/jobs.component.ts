import { Component, OnInit } from '@angular/core';
import { JobModel } from './models/job.model';
import { JobsService } from './services/jobs.service';

@Component({
	moduleId: module.id,
	selector: 'jobs',
	templateUrl: 'tmpl/jobs.html',
	styleUrls: ['styles/jobs.css']
})
export class JobsComponent implements OnInit {
	protected jobs: JobModel[] = [];

	protected jobsService: JobsService;

	constructor(jobsService: JobsService) {
		this.jobsService = jobsService;
	}

	ngOnInit(): void {
		this.jobsService.getJobs()
			.then((skills) => this.jobs = skills);
	}
}
