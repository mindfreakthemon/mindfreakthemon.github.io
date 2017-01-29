import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { MainComponent } from './main/main.component';
import { RootComponent } from './root/root.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkModule } from './modules/work/work.module';
import { ProjectModule } from './modules/projects/projects.module';
import { CommonModule } from './modules/common/common.module';

@NgModule({
	imports: [
		WorkModule,
		ProjectModule,
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		CommonModule
	],

	declarations: [
		RootComponent,
		SocialComponent,
		MainComponent
	],

	bootstrap: [
		RootComponent
	]
})
export class AppModule {
}
