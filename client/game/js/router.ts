import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Garden}     from '/game/js/Garden.ts';
import {Animals}     from '/game/js/Animals.ts';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['Animals']">Animals</a>
      <a [routerLink]="['Garden']">Garden</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/Garden',   name: 'Garden',     component: Garden},
  {path: '/Animals',   name: 'Animals',     component: Animals},
])
export class Router {
	// constructor(private _router: Router,routeParams: RouteParams){
	// 	this._router.navigate(['CrisisCenter']);
	// }
}