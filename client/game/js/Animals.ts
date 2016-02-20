import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	templateUrl: `/game/html/Animals.html`,
})
export class Animals{
	constructor(
		private _router: Router){

	}
	onSelect() {
		this._router.navigate(['Garden']);
	}
	

	animalsImage: Array<string>;
	constructor() {

		this.animalsImage = ['/game/image/bird.svg',
							'/game/image/cock.svg',
							'/game/image/cow.svg',
							'/game/image/dog.svg',
							'/game/image/dolphin.svg',
							'/game/image/goat.svg',
							'/game/image/grig.svg',
							'/game/image/lion.svg',
							'/game/image/pick.svg',
							'/game/image/sheep.svg'
							'/game/image/wolf.svg'];
	  }
}
