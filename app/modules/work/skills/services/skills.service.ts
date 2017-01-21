import { Injectable } from '@angular/core';
import { AbstractDataService } from '../../../common/services/abstract-data.service';
import { SkillModel, SkillCategory } from '../models/skill.model';

@Injectable()
export class SkillsService extends AbstractDataService<SkillModel> {

	getParticularSetOfSkills(category: SkillCategory): Promise<SkillModel[]> {
		return this.getList()
			.then((skills) => skills.filter((skill) => skill.category === category));
	}

	createInstance(data: any): SkillModel {
		return new SkillModel(data);
	}

	fetch(): Promise<Response> {
		return fetch('/build/statics/data/skills.json');
	}
}
