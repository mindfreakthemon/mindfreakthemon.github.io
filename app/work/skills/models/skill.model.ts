export class SkillModel {
	private _name: string;

	private _description: string;

	private _icon: string;

	constructor(name: string, description: string, icon: string) {
		this._name = name;
		this._description = description;
		this._icon = icon;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get description(): string {
		return this._description;
	}

	set description(value: string) {
		this._description = value;
	}

	get icon(): string {
		return this._icon;
	}

	set icon(value: string) {
		this._icon = value;
	}
}
