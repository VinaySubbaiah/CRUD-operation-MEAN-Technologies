
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from 'src/app/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
