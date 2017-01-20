import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { JobsRouteComponent } from './jobs/jobs-route.component';
import { SkillsRouteComponent } from './skills/skills-route.component';
import { EducationRouteComponent } from './education/education-route.component';

const routes: Routes = [
	{
		path: 'work',
		component: RootComponent,
		children: [
			{
				path: '',
				redirectTo: 'jobs',
				pathMatch: 'full'
			},
			{
				path: 'skills',
				component: SkillsRouteComponent
			},
			{
				path: 'jobs',
				component: JobsRouteComponent
			},
			{
				path: 'education',
				component: EducationRouteComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class WorkRoutingModule {
}
