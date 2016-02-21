import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {User} from '/game/js/User.ts';

@Component({
	templateUrl: `/game/html/Animals.html`,
	bindings: [User]
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
	checkAnimal: srting;

	constructor(private _router: Router,private _user: User){

	}
	onSelect(animal) {
		if (this.allow) {
			this.allow=false;
			if (this._user.level>0) {
				var audio = new Audio(animal.sound);
				audio.play();
				setTimeout(() => {
					audio.pause();
					this._router.navigate(['Garden']);
				},5000);
			}else{
				audio.pause();
				if (checkAnimal==animal) console.log('the right choice');
				else console.log('the wrong choice');
			}

		}

	}

	ngOnInit() {
		x=Math.floor((Math.random() * 14) );
		y=Math.floor((Math.random() * 14) );
		if (x==y) x=x-1;
		console.log(x,y);
		console.log(this._user.level);
		if (this._user.level>0) {
			this.firstImage=this.IMAGES[x];
			this.secondImage=this.IMAGES[y];
		}else{
			this.firstImage=this.IMAGES[x];
			this.secondImage=this.IMAGES[y];
			if (x>y) {
				z=y;
				checkAnimal=this.secondImage;
			}else {
				z=x;
				checkAnimal=this.firstImage;
			}
			var audio = new Audio(this.IMAGES[z].sound);
			audio.play();
		}

	 }
}
