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
	level: number = -1;
	constructor(private _http: Http) {
		this._http.get('/api/user/getMyLevel').subscribe(res => {
			var user = JSON.parse(res._body);
			this.level=user.level;
			console.log('Level Accepted');
		});
	}
	updateLevel(add){
		this.level+=add;
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		this._http.post('/api/user/updateLevel', this.level, { headers: headers })
		.subscribe(res => {
			console.log('Level Updated');
		});
	}
}
