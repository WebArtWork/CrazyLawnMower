import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'grass',
	templateUrl: `/game/html/grass.svg`,
})
export class Weed implements OnInit {
	grass: number = 0;
	timeout: string;
	counter: number = 0;

	constructor(){
		console.log('initialize the grass');
		this.levelUpWeed();
	}
	initWeed(){
		clearTimeout(this.timeout);
		this.grass=0;
		this.levelUpWeed();		
	}
	levelUpWeed(){
		this.timeout = setTimeout(function(){
			if(++this.grass<5) this.levelUpWeed();
		}, 1000);
	}
}
