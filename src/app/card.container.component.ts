import { Component } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './employee.service'

@Component({
	selector: 'card-container',
	templateUrl: 'app/card.container.component.html',
	providers: [ EmployeeService ]
})

export class CardContainerComponent {
	private _employees: Employee[];

	constructor(private _employeeService: EmployeeService) {}

	ngOnInit(): void {
		this._employeeService.getEmployees()
		.subscribe((employees => this._employees = employees))
	}
}