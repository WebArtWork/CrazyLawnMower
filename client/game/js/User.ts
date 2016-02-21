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
		this._http.post('/api/user/updateLevel',{
			level: this.level,
		}).subscribe(res => {
			console.log(res);
		});
	}
	getLevel(){
		return this.level;

	}
}
