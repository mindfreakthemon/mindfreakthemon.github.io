import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RootComponent } from './root/root.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkModule } from './modules/work/work.module';
import { ProjectModule } from './modules/projects/projects.module';

@NgModule({
	imports: [
		WorkModule,
		ProjectModule,
		AppRoutingModule,
		BrowserModule,
		FormsModule
	],

	declarations: [
		RootComponent,
		SocialComponent,
		MainComponent,
		NavBarComponent
	],

	bootstrap: [
		RootComponent
	]
})
export class AppModule {
}
