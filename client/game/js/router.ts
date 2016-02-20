import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {GardenGame} from '/game/js/GardenGame';
import {ImageGame} from '/game/js/ImageGame';

@Component({
	selector: 'my-app',
	template: `Routing Page<router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES]
});
@RouteConfig([
	{path: '/Garden', name: 'Garden', component: GardenGame},
	{path: '/Animals', name: 'Animals', component: ImageGame},
]);
export class AppComponent { };