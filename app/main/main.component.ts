import { Component } from '@angular/core';
import { SocialComponent } from '../social/social.component';

@Component({
	selector: 'main',
	templateUrl: 'build/templates/main/main.html',
	directives: [
		SocialComponent
	]
})
export class MainComponent {

}
