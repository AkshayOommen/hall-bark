import { Component, Input } from '@angular/core';
import { Employee } from '../shared/interfaces/Employee';
import { Technology } from '../shared/interfaces/Technology';
import { TechnologyService } from '../shared/services/technology.service';

@Component({
	selector: 'business-card',
	templateUrl: 'app/business-card/business.card.component.html',
	providers: [TechnologyService]
})
	
export class BusinessCardComponent {
	// declare or initialize component properties first
	skills: Technology[];
	// name: string = 'Akshay Oommen';
	// designation: string = 'Senior Software Engineer';
	// phone: string = '(+91) 1234567890';
	// email: string = 'akshay_oommen@agambo.com';
	@Input() employee: Employee;

	// make the constructor call second
	constructor(private _technologyService: TechnologyService) {}

	// lifecycle hooks at the end
	ngOnInit(): void {
		this._technologyService.getTechnologies()
		.subscribe(technologies => this.skills = technologies);
	}
}