import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormComponent} from './main-page/form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {TableComponent} from './main-page/table/table.component';
import {AppRoutingModule} from './app-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import {DetailsPageComponent} from './details-page/details-page.component';
import {SimulationsComponent} from './simulations/simulations.component';
import {SimulationDetailComponent} from './simulations/simulation-detail/simulation-detail.component';
import {SimulationEditComponent} from './simulations/simulation-edit/simulation-edit.component';
import {SimulationListComponent} from './simulations/simulation-list/simulation-list.component';
import {SimulationItemComponent} from './simulations/simulation-list/simulation-item/simulation-item.component';
import {SimulationStartComponent} from './simulations/simulation-start/simulation-start.component';
import {HttpClientModule} from '@angular/common/http';
import {SimulationService} from './simulations/simulation.service';



@NgModule({
  declarations: [
    AppComponent,
      FormComponent,
      TableComponent,
      MainPageComponent,
      DetailsPageComponent,

      SimulationsComponent,
      SimulationDetailComponent,
      SimulationEditComponent,
      SimulationListComponent,
      SimulationItemComponent,
      SimulationStartComponent

  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatTableModule,
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [SimulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
