import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../shared/classes/Employee';

@Component({
	selector: 'employee-form',
	templateUrl: 'app/employee-form/employee.form.component.html'
})

export class EmployeeFormComponent {
	model = new Employee();

	@Output() isFormVisibleChanged: EventEmitter<boolean> = new EventEmitter<boolean>;

	onCancel(): void {
		this.isFormVisibleChanged.emit(false);
	}
}