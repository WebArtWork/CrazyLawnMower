import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Image, ImageService}   from '/game/js/ImageService.ts';

@Component({
	templateUrl: `/game/html/Animals.html`,
	bindings: [ImageService]
})
export class Animals implements OnInit{

	constructor(
		private _router: Router,
		private _service: ImageService){

	}
	onSelect() {
		this._router.navigate(['Garden']);
	}
	console.log(Image);
	images: Image[];

	ngOnInit() {
	   this._service.getImages().then(images => this.images = images)
	 }

}
