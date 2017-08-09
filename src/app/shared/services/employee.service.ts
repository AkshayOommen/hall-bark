import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../interfaces/Employee'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
	private _url = 'app/shared/jsons/employees.json';
	constructor(private _http: Http) {}

	getEmployees(): Observable<Employee[]> {
		return this._http.get(this._url)
		.map((response: Response) => <Employee[]> response.json())
		.do(data => console.log(JSON.stringify(data)))
		.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error());
	}
}
