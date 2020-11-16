import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ADD_EMPLOYEE, BASE_URL, GET_EMPLOYEES } from './employee.constants';
import { Employee } from './Employee.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class EmployyeService {

  constructor(private httpClient: HttpClient, private logger: LoggerService) { }

  getEmployeeList(): Observable<any> {
    this.logger.logStatus('Inside getEmployeeList method of Employee Service');
    return this.httpClient.get<Employee>(BASE_URL + GET_EMPLOYEES );
  }

  saveEmployee(employee: NgForm): Observable<any> {
    this.logger.logStatus('Inside saveEmployee method of Employee Service');
    return this.httpClient.post<Employee>(BASE_URL + ADD_EMPLOYEE, employee.value);
  }
}
