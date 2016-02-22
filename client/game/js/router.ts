import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Garden} from '/game/js/Garden.ts';
import {Animals} from '/game/js/Animals.ts';
import {Grass} from '/game/js/Grass.ts';

@Component({
	selector: 'my-app',
	template: `<grass class="grassbackgrond"></grass><router-outlet></router-outlet>`,
	bindings: [Grass],
	directives: [ROUTER_DIRECTIVES,Grass]
})
@RouteConfig([
	{path: '/', name: 'Garden', component: Garden},
	{path: '/Animals', name: 'Animals', component: Animals},
])
export class Router{

}