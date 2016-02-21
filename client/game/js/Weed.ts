import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'weed',
	templateUrl: `/game/html/weed.svg`,
})
export class Weed {
	level: number = 1;
	timeout: string;

	constructor(){
		this.levelUpWeed();
	}
	initWeed(){
		clearTimeout(this.timeout);
		this.level=1;
		this.levelUpWeed();		
	}
	levelUpWeed(){
		setTimeout(() => {
			console.log('weed level '+this.level);
			if(++this.level<6) this.levelUpWeed();
		},1000);
	}
}
