import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WorkRoutingModule } from './work-routing.module';
import { JobsComponent } from './jobs/jobs.component';
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
		JobsComponent
	],

	providers: [
		SkillService
	]
})
export class WorkModule {
}
