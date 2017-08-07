import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignerComponent } from './assigner/assigner.component';

const routes: Routes = [
	{
		path: 'assigner',
		component: AssignerComponent
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
export class AssignerRoutingModule {
}
