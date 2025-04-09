import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] | undefined;
  $departments: Observable<Department[]> | undefined;

  constructor(
    private departmentsServices: DepartmentsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.departmentsServices.getDepartments().subscribe((departments) => {
    //   this.departments = departments;
    // });
    this.$departments = this.departmentsServices.getDepartments();
  }
  gotoDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', { id: departmentId }]);
  }
}
