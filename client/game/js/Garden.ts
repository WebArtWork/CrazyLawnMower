import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Weed} from '/game/js/Weed.ts';

@Component({
	templateUrl: `/game/html/Garden.html`,
	bindings: [Weed],
	directives:[Weed],
	host: {
		'(mouseup)': 'toggleLawnMower($event,false)',
		'(mousedown)': 'toggleLawnMower($event,true)',
		'(mousemove)': 'moveLawnMower($event,true)',
	}
})
export class Garden{
	weedPosleft: number = 50;
	weedPostop: number = 50;
	boyPosleft: number = 350;
	boyPostop: number = 350;
	constructor(private _router: Router, private _weed: Weed){

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