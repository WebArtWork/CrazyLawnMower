import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
<<<<<<< HEAD
import {Grass} from '/game/js/Grass.ts';
import {User} from '/game/js/User.ts';

@Component({
	templateUrl: `/game/html/Garden.html`,
	bindings: [Grass, User]
	directives:[Grass]
=======
import {Weed} from '/game/js/Weed.ts';

@Component({
	templateUrl: `/game/html/Garden.html`,
	bindings: [Weed],
	directives:[Weed]
>>>>>>> 5ffb464048299c7dc9a8d676cd6fa0f4f73765b4
	host: {
		'(window:keydown)': 'toggleLawnMower($event,true)',
		'(window:keyup)': 'toggleLawnMower($event,false)',
	}
})
export class Garden{
<<<<<<< HEAD
	constructor(private _router: Router, private _user: User){
		//_grass.ngOnInit();

=======
	constructor(private _router: Router, private _weed: Weed){
>>>>>>> 5ffb464048299c7dc9a8d676cd6fa0f4f73765b4
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
