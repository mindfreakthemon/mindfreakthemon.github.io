import { Injectable } from '@angular/core';
import { SkillModel, SkillCategory } from '../models/skill.model';

@Injectable()
export class SkillService {

	private cache: SkillModel[];

	getSkills(): Promise<SkillModel[]> {
		if (this.cache) {
			return Promise.resolve(this.cache);
		}

		return fetch('/build/statics/data/skills.json')
			.then((response: Response) => response.json())
			.then((json) => {
				let array = json.data;

				return this.cache = array.map((item) => this.getSkill(item));
			});
	}

	getParticularSetOfSkills(category: SkillCategory): Promise<SkillModel[]> {
		return this.getSkills()
			.then((skills) => skills.filter((skill) => skill.category === category));
	}

	getSkill(data: any): SkillModel {
		return new SkillModel(data.name, data.description, data.icon, data.type, data.category);
	}

}
