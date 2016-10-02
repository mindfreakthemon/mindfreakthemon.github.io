import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: 'build/templates/app.html'
})
export class AppComponent {
	@HostBinding('class.loaded')
	public loaded = true;
}
