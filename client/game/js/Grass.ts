import {Component} from 'angular2/core';
import {User} from '/game/js/User.ts';

@Component({
	selector: 'grass',
	templateUrl: `/game/html/grass.svg`,
})
export class Grass {	
	constructor(,private _user: User){
		console.log('Grass has been initialized');
	}
}
