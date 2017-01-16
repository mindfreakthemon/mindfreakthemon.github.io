import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WorkRoutingModule } from './work-routing.module';
import { JobsRouteComponent } from './jobs/jobs-route.component';
import { SkillsComponent } from './skills/skills.component';
import { RootComponent } from './root/root.component';
import { SkillComponent } from './skills/skill.component';
import { SkillsService } from './skills/services/skills.service';
import { SkillsRouteComponent } from './skills/skills-route.component';
import { JobsService } from './jobs/services/jobs.service';
import { JobsComponent } from './jobs/jobs.component';

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
		SkillsRouteComponent,
		JobsComponent,
		JobsRouteComponent
	],

	providers: [
		SkillsService,
		JobsService
	]
})
export class WorkModule {
}
