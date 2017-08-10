import { Employee } from '../shared/interfaces/Employee';

export class Employee implements Employee {
	name: string;
	designation: string;
	phone:  string;
	email: string;

	constructor (public name: string, public designation: string, public phone: string, public email: string) {
		this.name = name;
		this.designation = designation;
		this.phone = phone;
		this,email = email;
	}
}