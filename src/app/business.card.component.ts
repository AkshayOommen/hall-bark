import { Component } from '@angular/core';
import { Technology } from './Technology';
import { TechnologyService } from './technology.service';

@Component({
	selector: 'business-card',
	templateUrl: 'app/business.card.component.html',
	providers: [TechnologyService]
})
	
export class BusinessCardComponent {
	// declare or initialize component properties first
	skills: Technology[];
	name: string = 'Akshay Oommen';
	designation: string = 'Senior Software Engineer';
	phone: string = '(+91) 1234567890';
	email: string = 'akshay_oommen@agambo.com';
	officeAddress: string = 'Agambo Offices, 123 Boulevard, Le Rouge, Blippy';

	// make the constructor call second
	constructor(private _technologyService: TechnologyService) {}

	// lifecycle hooks at the end
	ngOnInit(): void {
		this._technologyService.getTechnologies()
		.subscribe(technologies => this.skills = technologies);
	}
}