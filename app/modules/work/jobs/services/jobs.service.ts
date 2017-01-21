import { Injectable } from '@angular/core';
import { JobModel } from '../models/job.model';
import { AbstractDataService } from '../../../common/services/abstract-data.service';

@Injectable()
export class JobsService extends AbstractDataService<JobModel> {

	createInstance(data: any): JobModel {
		return new JobModel(data);
	}

	fetch(): Promise<Response> {
		return fetch('/build/statics/data/jobs.json');
	}
}
