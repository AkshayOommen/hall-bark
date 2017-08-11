import { Employee as EmployeeInterface } from '../interfaces/Employee';

export class Employee implements EmployeeInterface {
	name: string;
	designation: string;
	phone:  string;
	email: string;

	constructor (name: string, designation: string, phone: string, email: string) {
		this.name = name;
		this.designation = designation;
		this.phone = phone;
		this.email = email;
	}
}