import { Component } from '@angular/core';
import { Employee } from '../shared/interfaces/Employee';
import { EmployeeService } from '../shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
	selector: 'card-container',
	templateUrl: 'app/card-container/card.container.component.html',
	providers: [ EmployeeService ]
})

export class CardContainerComponent {
	private _employees: Employee[];

	isFormVisible: boolean = false;

	constructor(private _employeeService: EmployeeService, private _router: Router) {}

	ngOnInit(): void {
		this._employeeService.getEmployees()
		.subscribe((employees => this._employees = employees))
	}

	onBack(): void {
		this._router.navigate(['/greeting-card']);
	}

	onAdd(): void {
		this.isFormVisible = true;
	}

	cancelForm(isFormVisible: boolean): void {
		this.isFormVisible = isFormVisible;
	}

	addEmployee(employee: Employee): void {
		this._employees.push(employee);
	}
}