import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from '../app-component/app.component';
import { CardContainerComponent }  from '../card-container/card.container.component';
import { BusinessCardComponent }  from '../business-card/business.card.component';
import { GreetingCardComponent }  from '../greeting-card/greeting.card.component';
import { EmployeeFormComponent }  from '../employee-form/employee.form.component';

const appRoutes: Routes = [
	{path: 'business-card', component: BusinessCardComponent},
	{path: 'business-cards', component: CardContainerComponent},
	{path: 'greeting-card', component: GreetingCardComponent}
]


@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, CardContainerComponent, BusinessCardComponent, GreetingCardComponent, EmployeeFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
