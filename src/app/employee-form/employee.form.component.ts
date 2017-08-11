import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../shared/classes/Employee';

@Component({
	selector: 'employee-form',
	templateUrl: 'app/employee-form/employee.form.component.html'
})

export class EmployeeFormComponent {
	model = new Employee('','','','');

	@Output() isFormVisibleChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() isNewEmployeeAdded: EventEmitter<Employee> = new EventEmitter<Employee>();

	onCancel(): void {
		this.isFormVisibleChanged.emit(false);
	}

	onSubmit(): void {
		this.isNewEmployeeAdded.emit(this.model);
		this.isFormVisibleChanged.emit(false);
		this.model = new Employee('','','','');
	}
}