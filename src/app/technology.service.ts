import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Technology } from './Technology';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TechnologyService {
	private _url = 'app/technologies.json';
	constructor(private _http: Http) {}

	getTechnologies(): Observable<Technology[]> {
		return this._http.get(this._url)
		.map((response: Response) => <Technology[]> response.json())
		.do(data => console.log(JSON.stringify(data)))
		.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error());
	}
}