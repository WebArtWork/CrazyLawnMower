import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	templateUrl: `/game/html/Animals.html`
})
export class Animals{
	constructor(
		private _router: Router){

	}
	onSelect() {
		this._router.navigate(['Garden']);
	}
}
