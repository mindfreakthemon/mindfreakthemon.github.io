import { Component, Input } from '@angular/core';
import { SkillModel } from './models/skill.model';

@Component({
	moduleId: module.id,
	selector: 'skill',
	templateUrl: 'tmpl/skill.html',
	styleUrls: ['styles/skill.css']
})
export class SkillComponent {
	@Input()
	skill: SkillModel;
}
