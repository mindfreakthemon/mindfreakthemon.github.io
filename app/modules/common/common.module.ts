import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StickyRootDirective, StickyDirective } from './sticky/sticky.directive';
import { RootComponent } from './root/root.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule
	],

	declarations: [
		LoadingComponent,
		NavBarComponent,
		StickyDirective,
		StickyRootDirective,
		RootComponent
	],

	providers: [
	],

	exports: [
		LoadingComponent,
		NavBarComponent,
		StickyDirective,
		StickyRootDirective,
		RootComponent
	]
})
export class CommonModule {
}
