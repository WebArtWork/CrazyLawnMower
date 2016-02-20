import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	templateUrl: `/game/html/Garden.html`,
	styleUrls: ['/game/css/Garden.css'],
})
export class Garden{
	constructor(
		private _router: Router){

	}
	onSelect() {
		this._router.navigate(['Animals']);
	}
}
