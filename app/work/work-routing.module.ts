import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './cv/cv.component';
import { SkillsComponent } from './skills/skills.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
	{
		path: 'work',
		component: RootComponent,
		children: [
			{
				path: '',
				redirectTo: 'cv',
				pathMatch: 'full'
			},
			{
				path: 'skills',
				component: SkillsComponent
			},
			{
				path: 'cv',
				component: CVComponent
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
