import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'body',
	templateUrl: 'build/templates/app.html'
})
export class AppComponent {
	@HostBinding('class.loaded') loaded = true;
}

