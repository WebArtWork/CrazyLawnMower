import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	templateUrl: `/game/html/Garden.html`,
})
export class Garden{
	constructor(private _router: Router){
		
	}
	onSelect() {
		this._router.navigate(['Animals']);
	}
}
