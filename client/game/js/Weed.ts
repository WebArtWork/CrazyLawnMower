import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'weed',
	templateUrl: `/game/html/weed.svg`,
})
export class Weed implements OnInit {
	weed: number = 0;
	timeout: string;
	counter: number = 0;

	constructor(){
		console.log('initialize the weed');
		this.levelUpWeed();
	}
	initWeed(){
		clearTimeout(this.timeout);
		this.weed=0;
		this.levelUpWeed();		
	}
	levelUpWeed(){
		this.timeout = setTimeout(function(){
			if(++this.weed<5) this.levelUpWeed();
		}, 1000);
	}
}
