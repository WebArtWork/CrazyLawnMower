import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Garden}     from '/game/js/Garden.ts';
import {Animals}     from '/game/js/Animals.ts';

@Component({
	selector: 'my-app',
	template: `<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', name: 'Garden', component: Garden},
	{path: '/Animals', name: 'Animals', component: Animals},
])
export class Router {

}