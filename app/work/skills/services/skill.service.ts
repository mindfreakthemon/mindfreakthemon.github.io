import { Injectable } from '@angular/core';
import { SkillModel } from '../models/skill.model';

@Injectable()
export class SkillService {

	getSkills(): Promise<SkillModel[]> {
		return fetch('/build/statics/data/skills.json')
			.then((response: Response) => response.json())
			.then((json) => {
				let array = json.data;

				return array.map((item) => this.getSkill(item));
			});
	}

	getSkill(data: any): SkillModel {
		return new SkillModel(data.name, data.description, data.icon);
	}

}
