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


@NgModule({
  declarations: [
    AppComponent,
      FormComponent,
      TableComponent,
      MainPageComponent,
      DetailsPageComponent

  ],
  imports: [
    BrowserModule,
      FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
