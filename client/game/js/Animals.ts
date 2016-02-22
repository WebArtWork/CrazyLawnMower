import {Component, OnInit, NgZone} from 'angular2/core';
import {Router} from 'angular2/router';
import {User} from '/game/js/User.ts';

@Component({
	templateUrl: `/game/html/Animals.html`
})
export class Animals implements OnInit{
	IMAGES = [
		{pathImage: '/game/image/bird.svg', sound: '/game/sound/bird.wav'},
		{pathImage:'/game/image/cat.svg',sound:'/game/sound/cat.wav'},
		{pathImage:'/game/image/chicken.svg',sound:'/game/sound/chicken.wav'},
		{pathImage:'/game/image/cock.svg',sound:'/game/sound/cock.wav'},
		{pathImage:'/game/image/cow.svg',sound:'/game/sound/cow.wav'},
		{pathImage:'/game/image/dog.svg',sound:'/game/sound/dog.wav'},
		{pathImage:'/game/image/elephant.svg',sound:'/game/sound/elephant.wav'},
		{pathImage:'/game/image/dolphin.svg',sound:'/game/sound/dolphin.mp3'},
		{pathImage:'/game/image/goat.svg',sound:'/game/sound/goat.mp3'},
		{pathImage:'/game/image/grig.svg',sound:'/game/sound/grig.wav'},
		{pathImage: '/game/image/lion.svg',sound:'/game/sound/lion.wav'},
		{pathImage:'/game/image/monkey.svg',sound:'/game/sound/monkey.wav'},
		{pathImage:'/game/image/owl.svg',sound:'/game/sound/owl.wav'},
		{pathImage:'/game/image/pick.svg',sound:'/game/sound/pick.wav'},
		{pathImage: '/game/image/sheep.svg',sound:'/game/sound/sheep.wav'},
		{pathImage:'/game/image/frog.svg',sound:'/game/sound/frog.mp3'}
	];
	allow: boolean = true;
	checkAnimal: string;
	x: number;
	y: number;
	z: number;

	constructor(private _router: Router,private _user: User,private zone: NgZone){
		this.x=Math.floor((Math.random() * 16) );
		this.y=Math.floor((Math.random() * 16) );
		if (this.x==this.y) this.x+=1;
		if (this.x==16) this.x=0;
		if(this._user.level>=300){
			this.z = Math.random() < 0.5 ? this.x : this.x;
			var audio = new Audio(this.IMAGES[this.z].sound);
			audio.play();
		}
	}
	onSelect(point) {
		if (this.allow) {
			this.allow=false;
			if (this._user.level>=300) {
				if (this.z==point){
					this._user.updateLevel(20);
				}else{
					this._user.updateLevel(-100);
				}
				this._router.navigate(['Garden']);
			}else{
				this._user.updateLevel(20)
				var audio = new Audio(this.IMAGES[point].sound);
				audio.play();
				setTimeout(() => {
					audio.pause();
					this._router.navigate(['Garden']);
				},6000);
			}
		}
	}
}
