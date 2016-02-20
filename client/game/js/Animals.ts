import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {TimerWrapper} from 'angular2/src/core/facade/async';

@Component({
	templateUrl: `/game/html/Animals.html`
})
export class Animals implements OnInit{
	IMAGES = [
		{name: 'bird', pathImage: '/game/image/bird.svg', sound: '/game/image/bird.mp3'},
		{name: 'cat', pathImage:'/game/image/cat.svg',sound:'/game/image/cat.mp3'},
		{name: 'chicken', pathImage:'/game/image/chicken.svg',sound:'/game/image/chicken.mp3'},
		{name: 'cock', pathImage:'/game/image/cock.svg',sound:'/game/image/cock.mp3'},
		{name: 'cow', pathImage:'/game/image/cow.svg',sound:'/game/image/cow.mp3'},
		{name: 'dog', pathImage:'/game/image/dog.svg',sound:'/game/image/dog.mp3'},
		{name: 'dolphin', pathImage:'/game/image/dolphin.svg',sound:'/game/image/dolphin.mp3'},
		{name: 'goat', pathImage:'/game/image/goat.svg',sound:'/game/image/goat.mp3'},
		{name: 'grig', pathImage:'/game/image/grig.svg',sound:'/game/image/grig.mp3'},
		{name: 'lion',pathImage: '/game/image/lion.svg',sound:'/game/image/lion.mp3'},
		{name: 'monkey', pathImage:'/game/image/monkey.svg',sound:'/game/image/monkey.mp3'},
		{name: 'pick', pathImage:'/game/image/pick.svg',sound:'/game/image/pick.mp3'},
		{name: 'sheep',pathImage: '/game/image/sheep.svg',sound:'/game/image/sheep.mp3'},
		{name: 'wolf', pathImage:'/game/image/wolf.svg',sound:'/game/image/wolf.mp3'}
	];

	constructor(
		private _router: Router){

	}
	onSelect() {
		this._router.navigate(['Garden']);
	}
	ngOnInit() {
		x=Math.floor((Math.random() * 10) + 1);
		y=Math.floor((Math.random() * 10) + 1);
		if (x==y) x=x+1;
		this.firstImage=this.IMAGES[x];
		this.secondImage=this.IMAGES[y];
	 }
}
