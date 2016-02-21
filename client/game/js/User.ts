//import {Http} from 'angular2/http';
import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';


@Component({
	selector: 'user',
	providers: [HTTP_PROVIDERS],
	bindings: [Http]
})
@Injectable()
export class User{
	level: number = 0
	constructor(private _http: Http) {
		this.getUser();
	}
	getUser(){
		this._http.get('/api/user/getMe').subscribe(res => {
			var user = JSON.parse(res._body);
			this.level=user.level;
			this.updateLevel(1);
		});
	}
	updateLevel(add){
		this.level+=add;
		console.log('updateLevel');
		console.log(this.level);
		console.log(add);
		console.log('updating');
		let headers = new Headers({ 'Content-Type': 'application/json' });
		this._http.post('/api/user/updateLevel', this.level, { headers: headers })
		.subscribe(res => {
			console.log('POST');
			console.log(res);
		});





	}
	getLevel(){
		return this.level;

	}
}
