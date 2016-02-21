import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Weed} from '/game/js/Weed.ts';
import {Boy} from '/game/js/Boy.ts';

@Component({
	templateUrl: `/game/html/Garden.html`,
	bindings: [Weed,Boy],
	directives:[Weed,Boy],
	host: {
		'(mousemove)': 'mouseMove($event)',
	}
})
export class Garden{
	weedPosleft: number = 50;
	weedPostop: number = 50;
	boyPosleft: number = 350;
	boyPostop: number = 350;
	moveLeft: boolean = false;
	lastX: number = 0;
	constructor(private _router: Router, private _weed: Weed, private _boy: Boy){
	}
	mouseMove(e){
		this.boyPosleft=e.x-100;
		this.boyPostop=e.y-100;
		if(e.x>this.lastX) this.moveLeft=false;
		else this.moveLeft=true;
		this.lastX=e.x;
	}
	onSelect(){
		this._router.navigate(['Animals']);
	}
	onSelectWeed(){
		if(++this.counter==10){
			this._router.navigate(['Animals']);
		}else{
			_weed.initWeed();
		}
		console.log('onSelectWeed');
	}
	toggleLawnMower(e,bool){
		console.log(e);
		console.log(bool);
	}
}