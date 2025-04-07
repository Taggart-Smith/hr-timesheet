import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] | undefined;
  constructor(
    private departmentsServices: DepartmentsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.departments = this.departmentsServices.departments;
  }
  gotoDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', { id: departmentId }]);
  }
}
