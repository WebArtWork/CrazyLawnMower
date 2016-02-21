//import {Http} from 'angular2/http';
import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';


@Component({
	selector: 'user',
	providers: [HTTP_PROVIDERS],
	bindings: [Http]
})
@Injectable()
export class User{
	//username: string;
	//level: number = 0


	constructor(http: Http) {
		//this.getUser();
	}



	getUser(){


		// this._http.get("/api/user/getMe")
		// // Call map on the response observable to get the parsed people object
		// .map(res => res.json())
		// // Subscribe to the observable to get the parsed people object and attach it to the
		// // component
		// .subscribe(user => this.username = user.username, this.level = user.level);


	}
}
