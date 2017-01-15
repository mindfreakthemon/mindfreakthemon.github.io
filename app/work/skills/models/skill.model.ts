export type SkillCategory = 'programming-language' | 'framework' | 'databases';

export type SkillType = 'primary' | 'secondary';

export class SkillModel {
	public name: string;

	public description: string;

	public icon: string;

	public type: SkillType;

	public category: SkillCategory;

	constructor(name: string, description: string, icon: string, type: SkillType, category: SkillCategory) {
		this.name = name;
		this.description = description;
		this.icon = icon;
		this.type = type;
		this.category = category;
	}
}
