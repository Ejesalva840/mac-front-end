import { StudentService } from '../../services/student.service';
import { Student } from '../../entities/student';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { StudentDetails } from '../../entities/student-details';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentsList: MatTableDataSource<Student>;
  studentDetails: StudentDetails = null;

  columnsToDisplay = ['name', 'belt', 'style'];

  constructor(private studentService: StudentService) { }

  @ViewChild('studentPager') studentPager: MatPaginator;
  @ViewChild('studentSorter') studentSorter: MatSort;


  ngOnInit() {
    this.studentsList = new MatTableDataSource<Student>(this.studentService.getAllUsers());
    this.studentsList.paginator = this.studentPager;
    this.studentsList.sort = this.studentSorter;
  }

  selectStudent(student: Student) {
    this.studentDetails = this.studentService.getUserDetails(student.studentId);
  }

}
