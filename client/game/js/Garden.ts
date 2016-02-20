import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Weed} from '/game/js/Weed.ts';

@Component({
	templateUrl: `/game/html/Garden.html`,
	bindings: [Weed],
	directives:[Weed]
	host: {
		'(window:keydown)': 'toggleLawnMower($event,true)',
		'(window:keyup)': 'toggleLawnMower($event,false)',
	}
})
export class Garden{
	left: number = 20;
	top: number = 120;
	constructor(private _router: Router, private _weed: Weed){
	}
	onSelect(){
		this._router.navigate(['Animals']);
	}
	onSelectWeed(){
		console.log('this.counter');
		console.log(this.counter);
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