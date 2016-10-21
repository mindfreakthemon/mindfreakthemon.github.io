import { Component, HostBinding } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';

@Component({
	selector: 'app',
	templateUrl: 'build/templates/app.html',
	directives: [
		NavBarComponent
	]
})
export class AppComponent {
	@HostBinding('class.loaded')
	public loaded = true;
}
