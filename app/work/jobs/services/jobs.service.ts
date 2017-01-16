import { Injectable } from '@angular/core';
import { JobModel } from '../models/job.model';

@Injectable()
export class JobsService {

	private cache: JobModel[];

	getJobs(): Promise<JobModel[]> {
		if (this.cache) {
			return Promise.resolve(this.cache);
		}

		return fetch('/build/statics/data/jobs.json')
			.then((response: Response) => response.json())
			.then((json) => {
				let array = json.data;

				return this.cache = array.map((item) => this.getJob(item));
			});
	}

	getJob(data: any): JobModel {
		return new JobModel();
	}

}
