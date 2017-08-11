import { Component, Input, Output, EventEmitter } from '@angular/core';
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
	isControlPanelVisible: boolean = false;

	@Input() employee: Employee;
	@Input() isAddIcon: boolean;
	@Input() dataIndex: number;


	@Output() isBusinessCardDeleted: EventEmitter<number> = new EventEmitter<number>();
	
	// make the constructor call second
	constructor(private _technologyService: TechnologyService) {}

	// lifecycle hooks at the end
	ngOnInit(): void {
		this._technologyService.getTechnologies()
		.subscribe(technologies => this.skills = technologies);
	}

	setIconVisibility(isCursorInCard: boolean): void {
		this.isControlPanelVisible = isCursorInCard;
	}

	deleteBusinessCard(): void {
		this.isBusinessCardDeleted.emit(this.dataIndex);
	}
}