import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule
	],

	declarations: [
		LoadingComponent,
		NavBarComponent
	],

	providers: [
	],

	exports: [
		LoadingComponent,
		NavBarComponent
	]
})
export class CommonModule {
}
