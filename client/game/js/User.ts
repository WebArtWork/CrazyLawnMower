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
	username: string;
	level: number = 0


	constructor(private _http: Http) {
		this.getUser();
	}



	getUser(){
		this._http.get('/api/user/getMe').subscribe(res => {
			console.log(res._body);
		});



		// this._http.get("/api/user/getMe")
		// 
	}
}
