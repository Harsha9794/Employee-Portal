import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
import { Employee } from '../Employee.model';
import { EmployyeService } from '../employye.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private empService: EmployyeService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
    });
  }

  saveEmployee(emp: NgForm) {
    this.logger.logStatus('Inside  saveEmployee method of registration Component ');
    emp.value.dateOfBirth = this.datePipe.transform(emp.value.dateOfBirth, 'yyyy-MM-dd');
    this.empService.saveEmployee(emp).subscribe(
      (data) => {
        this.logger.logStatus('Employee registered succesfully ');
        alert('Employee registered succesfully');
        this.employeeForm.reset();
      },
      (error) => {
        this.logger.logStatus('Employee registration failed ');
        alert('Failed to register employee');
      }
    );
  }
}
