import {Component} from 'angular2/core';

@Component({
	selector: 'weed',
	templateUrl: `/game/html/weed.svg`,
})
export class Weed {
	level: number = 0;
	timeout: string;

	constructor(){
		this.levelUpWeed();
	}
	initWeed(){
		clearTimeout(this.timeout);
		this.level=0;
		this.levelUpWeed();		
	}
	levelUpWeed(){
		this.timeout=setTimeout(() => {
			if(++this.level<5) this.levelUpWeed();
		},1000);
	}
}
