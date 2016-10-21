import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CVComponent } from './cv/cv.component';

const appRoutes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'cv', component: CVComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
	useHash: true
});
