import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsRouteComponent } from './projects/projects-route.component';
import { RootComponent } from '../common/root/root.component';

const routes: Routes = [
	{
		path: 'projects',
		component: RootComponent,
		children: [
			{
				path: '',
				component: ProjectsRouteComponent,
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
export class ProjectRoutingModule {
}
