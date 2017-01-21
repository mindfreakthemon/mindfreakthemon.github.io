import { Component, Input, OnInit } from '@angular/core';
import { SkillModel, SkillCategory } from './models/skill.model';
import { SkillsService } from './services/skills.service';

@Component({
	moduleId: module.id,
	selector: 'skills',
	templateUrl: 'tmpl/skills.html',
	styleUrls: ['styles/skills.css']
})
export class SkillsComponent implements OnInit {
	@Input()
	protected category: SkillCategory;

	protected skills: SkillModel[] = [];

	protected skillsService: SkillsService;

	constructor(skillService: SkillsService) {
		this.skillsService = skillService;
	}

	ngOnInit(): void {
		this.skillsService.getParticularSetOfSkills(this.category)
			.then((skills) => this.skills = skills);
	}
}
