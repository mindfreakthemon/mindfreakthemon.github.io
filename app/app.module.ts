import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { SocialComponent } from './social/social.component';
import { MainComponent } from './main/main.component';
import { CVComponent } from './cv/cv.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RootComponent } from './root/root.component';

@NgModule({
	imports: [
		routing,
		BrowserModule,
		FormsModule
	],

	declarations: [
		RootComponent,
		SocialComponent,
		MainComponent,
		CVComponent,
		NavBarComponent
	],

	bootstrap: [
		RootComponent
	]
})
export class AppModule {
}
