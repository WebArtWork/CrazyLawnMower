import {Component, OnInit} from 'angular2/core';

@Component({
	templateUrl: `/game/html/grass.svg`,
})
export class Grass implements OnInit {
	grass: number = 0;
	timeout: string;
	counter: number = 0;

	constructor(){
		console.log('initialize the grass');
		this.levelUpGrass();
	}
	initGrass(){
		clearTimeout(this.timeout);
		this.grass=0;
		this.levelUpGrass();		
	}
	levelUpGrass(){
		this.timeout = setTimeout(function(){
			if(++this.grass<5) this.levelUpGrass();
		}, 1000);
	}
}
