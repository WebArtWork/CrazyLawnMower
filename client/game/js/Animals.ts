import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	templateUrl: `/game/html/Animals.html`
})
export class Animals implements OnInit{
	IMAGES = [
		{pathImage: '/game/image/bird.svg', sound: '/game/sounde/bird.mp3', time: 5000},
		{pathImage:'/game/image/cat.svg',sound:'/game/sound/cat.mp3',time: 5000},
		{pathImage:'/game/image/chicken.svg',sound:'/game/sound/chicken.mp3',time: 5000},
		{pathImage:'/game/image/cock.svg',sound:'/game/sound/cock.mp3',time: 4500},
		{pathImage:'/game/image/cow.svg',sound:'/game/sound/cow.wav',time: 5000},
		{pathImage:'/game/image/dog.svg',sound:'/game/sound/dog.wav',time: 5000},
		{pathImage:'/game/image/dolphin.svg',sound:'/game/sound/dolphin.mp3',time: 3000},
		{pathImage:'/game/image/goat.svg',sound:'/game/sound/goat.mp3',time: 5000},
		{pathImage:'/game/image/grig.svg',sound:'/game/sound/grig.mp3',time: 5000},
		{pathImage: '/game/image/lion.svg',sound:'/game/sound/lion.mp3',time: 5000},
		{pathImage:'/game/image/monkey.svg',sound:'/game/sound/monkey.mp3',time: 5000},
		{pathImage:'/game/image/pick.svg',sound:'/game/sound/pick.mp3',time: 5000},
		{pathImage: '/game/image/sheep.svg',sound:'/game/sound/sheep.mp3',time: 5000},
		{pathImage:'/game/image/wolf.svg',sound:'/game/sound/wolf.mp3',time: 4000}
	];
	alow: boolean = true;

	constructor(private _router: Router){}
	onSelect(animal) {		
		if (this.alow) {
			this.alow=false;
			var audio = new Audio(animal.sound);
			audio.play();
			setTimeout(() => {
				audio.pause();
				this._router.navigate(['Garden']);
			},5000);
		}

	}
	onGarden() {
		this._router.navigate(['Garden']);
	}

	ngOnInit() {
		x=Math.floor((Math.random() * 13) + 1);
		y=Math.floor((Math.random() * 13) + 1);
		if (x==y) x=x+1;
		console.log(x,y);
		this.firstImage=this.IMAGES[x];
		this.secondImage=this.IMAGES[y];
	 }
}
