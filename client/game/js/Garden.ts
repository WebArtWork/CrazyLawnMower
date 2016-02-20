import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Grass} from '/game/js/Grass.ts';

@Component({
	templateUrl: `/game/html/Garden.html`,
	bindings: [Grass]
})
export class Garden{
	constructor(private _router: Router){
		_grass.ngOnInit();
	}
	onSelect() {
		this._router.navigate(['Animals']);
	}
	onSelectGrass() {
		console.log('this.counter');
		console.log(this.counter);
		if(++this.counter==10){
			this._router.navigate(['Animals']);
		}else{
			_grass.initGrass();
		}
		console.log('onSelectGrass');
	}
}
