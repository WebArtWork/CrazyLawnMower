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
	_id: string;
	username: string;
	level: number = 0
	constructor(private _http: Http) {
		this.getUser();
	}
	getUser(){
		this._http.get('/api/user/getMe').subscribe(res => {
			var user = JSON.parse(res._body);
			this._id=user._id;
			this.username=user.username;
			this.level=user.level;
		});
	}
}
