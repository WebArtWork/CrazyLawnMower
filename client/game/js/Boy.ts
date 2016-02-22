import {Component} from 'angular2/core';

@Component({
	selector: 'boy',
	templateUrl: `/game/html/boy.svg`,
	host: {
		'(mousemove)': 'boyMove()',
		'(mousedown)': 'lawnmowerTurn()',
	}
})
export class Boy {
	Movement: boolean = false;
	Cutting: boolean = false;
	timeout1: string;
	timeout2: string;
	constructor(){
		console.log('Boy has been initialized');
	}
	lawnmowerTurn(){
		this.Cutting=true;
		clearTimeout(this.timeout1);
		this.timeout1=setTimeout(() => {
			this.Cutting=false;
		},3000);
	}
	boyMove(){
		this.Movement=true;
		clearTimeout(this.timeout2);
		this.timeout2=setTimeout(() => {
			this.Movement=false;
		},1000);
	}
}
