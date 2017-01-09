import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WorkRoutingModule } from './work-routing.module';
import { CVComponent } from './cv/cv.component';
import { SkillsComponent } from './skills/skills.component';
import { RootComponent } from './root/root.component';
import { SkillComponent } from './skills/skill.component';
import { SkillService } from './skills/services/skill.service';

@NgModule({
	imports: [
		WorkRoutingModule,
		BrowserModule,
		FormsModule
	],

	declarations: [
		RootComponent,
		SkillComponent,
		SkillsComponent,
		CVComponent
	],

	providers: [
		SkillService
	]
})
export class WorkModule {
}
