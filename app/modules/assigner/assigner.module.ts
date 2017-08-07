import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module';
import { AssignerComponent } from './assigner/assigner.component';
import { AssignerRoutingModule } from './assigner-routing.module';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		AssignerRoutingModule
	],

	declarations: [
		AssignerComponent
	],

	providers: []
})
export class AssignerModule {
}
