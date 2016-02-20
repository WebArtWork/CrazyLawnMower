import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	templateUrl: `/game/html/Garden.html`,
})
export class Garden implements OnInit {
	grass: number = 0;
	timeout: string;
	counter: number = 0;

	constructor(private _router: Router){

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
			this.grass=0;
			clearTimeout(this.timeout);
			this.levelUpGrass();
		}
		console.log('onSelectGrass');
	}
	ngOnInit() {
		console.log('init called');
		this.levelUpGrass();
	}
	levelUpGrass(){
		this.timeout = setTimeout(function(){
			if(++this.grass<5) this.levelUpGrass();
		}, 1000);
	}
}
