import {Injectable} from 'angular2/core';

export class Image {
	constructor(public name: string, public pathImage: string, public music: string) { }
}
@Injectable()
export class ImageService {
	console.log(imagesPromise);
	getImages() { return imagesPromise; }
}

var IMAGES = [
	new Image('bird', '/game/image/bird.svg','/game/image/bird.mp3'),
	new Image('cat', '/game/image/cat.svg','/game/image/cat.mp3'),
	new Image('chicken', '/game/image/chicken.svg','/game/image/chicken.mp3'),
	new Image('cock', '/game/image/cock.svg','/game/image/cock.mp3'),
	new Image('cow', '/game/image/cow.svg','/game/image/cow.mp3'),
	new Image('dog', '/game/image/dog.svg','/game/image/dog.mp3')
	new Image('dolphin', '/game/image/dolphin.svg','/game/image/dolphin.mp3')
	new Image('goat', '/game/image/goat.svg','/game/image/goat.mp3')
	new Image('grig', '/game/image/grig.svg','/game/image/grig.mp3')
	new Image('lion', '/game/image/lion.svg','/game/image/lion.mp3')
	new Image('monkey', '/game/image/monkey.svg','/game/image/monkey.mp3')
	new Image('pick', '/game/image/pick.svg','/game/image/pick.mp3')
	new Image('sheep', '/game/image/sheep.svg','/game/image/sheep.mp3')
	new Image('wolf', '/game/image/wolf.svg','/game/image/wolf.mp3')
];

var imagesPromise = Promise.resolve(IMAGES);
console.log(imagesPromise);
