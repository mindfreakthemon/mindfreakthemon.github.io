import { Component, OnInit } from '@angular/core';
import { SkillService } from './services/skill.service';
import { SkillModel } from './models/skill.model';

@Component({
	moduleId: module.id,
	selector: 'skills',
	templateUrl: 'tmpl/skills.html',
	styleUrls: ['styles/skills.css']
})
export class SkillsComponent implements OnInit {

	protected skillService: SkillService;

	protected skills: SkillModel[] = [];

	constructor(skillService: SkillService) {
		this.skillService = skillService;
	}

	ngOnInit(): void {
		this.skillService.getSkills()
			.then((skills) => this.skills = skills);
	}
}
