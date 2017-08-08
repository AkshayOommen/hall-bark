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
	description: string = 'He likes music.';

	// make the constructor call second
	constructor(private _technologyService: TechnologyService) {}

	// lifecycle hooks at the end
	ngOnInit(): void {
		this._technologyService.getTechnologies()
		.subscribe(technologies => this.skills = technologies);
	}
}