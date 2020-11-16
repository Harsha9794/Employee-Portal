import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee.model';
import { EmployyeService } from '../employye.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private empService: EmployyeService, private logger: LoggerService) { }

  ngOnInit() {

    this.empService.getEmployeeList().subscribe(data => {
    this.logger.logStatus('Fetching getEmployeeList method of list employee Component ');
    this.employees = data;
    });
  }

}
