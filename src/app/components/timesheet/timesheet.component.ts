import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../../interfaces/department';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-timesheet',
  standalone: false,
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.scss',
})
export class TimesheetComponent implements OnInit {
  department: Department | undefined;
  departments: Department[] | undefined;
  constructor(
    private route: ActivatedRoute,
    private departmentsService: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find(
      (department) => department.id === this.route.snapshot.params['id']
    );
  }
}
