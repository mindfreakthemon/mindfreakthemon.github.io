import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StickyRootDirective, StickyDirective } from './sticky/sticky.directive';
import { RootComponent } from './root/root.component';
import { DraggableDirective } from './drag-n-drop/draggable.directive';
import { DroppableDirective } from './drag-n-drop/droppable.directive';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule
	],

	declarations: [
		DraggableDirective,
		DroppableDirective,
		LoadingComponent,
		NavBarComponent,
		StickyDirective,
		StickyRootDirective,
		RootComponent
	],

	providers: [
	],

	exports: [
		DraggableDirective,
		DroppableDirective,
		LoadingComponent,
		NavBarComponent,
		StickyDirective,
		StickyRootDirective,
		RootComponent
	]
})
export class CommonModule {
}
