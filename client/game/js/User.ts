export class User{
	username: string;
	timeout: string;
	level: number = 0;

	constructor(){
		console.log("111111111111111111111111111111");
		console.log(this.user);

	}

	getUser(){
		this.http.get(this.getMe)
					.map(res => <User[]> res.json().data)
					.catch(this.handleError);
	}
}
