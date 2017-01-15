import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { SkillsComponent } from './skills/skills.component';
import { RootComponent } from './root/root.component';

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
				component: SkillsComponent
			},
			{
				path: 'jobs',
				component: JobsComponent
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
