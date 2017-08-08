import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import { BusinessCardComponent }  from './business.card.component';
import { GreetingCardComponent }  from './greeting.card.component';

const appRoutes: Routes = [
	{path: 'business-card', component: BusinessCardComponent},
	{path: 'greeting-card', component: GreetingCardComponent}
]


@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, BusinessCardComponent, GreetingCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
