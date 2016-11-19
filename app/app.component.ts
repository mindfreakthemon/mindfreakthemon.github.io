import { Component, HostBinding } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'tmpl/app.html',
	styleUrls: ['styles/app.css']
})
export class AppComponent {
	@HostBinding('class.loaded')
	public loaded = true;
}
