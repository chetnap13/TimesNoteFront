import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule}from '@angular/forms'
import {CommonModule}from '@angular/common'
import {HttpClient,HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RegistrationComponent } from '../app/Components/registration/registration.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
