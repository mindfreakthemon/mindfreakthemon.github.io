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
import { JobComponent } from './jobs/job.component';
import { EducationRouteComponent } from './education/education-route.component';
import { CommonModule } from '../common/common.module';

@NgModule({
	imports: [
		CommonModule,
		WorkRoutingModule,
		BrowserModule,
		FormsModule
	],

	declarations: [
		RootComponent,
		SkillComponent,
		SkillsComponent,
		SkillsRouteComponent,
		JobComponent,
		JobsComponent,
		JobsRouteComponent,
		EducationRouteComponent
	],

	providers: [
		SkillsService,
		JobsService
	]
})
export class WorkModule {
}
