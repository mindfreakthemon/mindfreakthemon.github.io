import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project.component';
import { ProjectsService } from './projects/services/projects.service';
import { ProjectsRouteComponent } from './projects/projects-route.component';

@NgModule({
	imports: [
		ProjectRoutingModule,
		BrowserModule,
		FormsModule
	],

	declarations: [
		ProjectsRouteComponent,
		ProjectsComponent,
		ProjectComponent
	],

	providers: [
		ProjectsService
	]
})
export class ProjectModule {
}
