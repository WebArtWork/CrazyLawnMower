import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'boy',
	templateUrl: `/game/html/boy.svg`,
	host: {
		//'(mousedown)': 'turnLawnMower($event,true)',
	}
})
export class Boy {
	Lawnmower: boolean = false;
	timeout: string;
	constructor(){}
	turnLawnMower(e,bool){
		this.Lawnmower=true;
		clearTimeout(this.timeout);
		this.timeout=setTimeout(() => {
			this.Lawnmower=false;
		},5000);
	}
}
