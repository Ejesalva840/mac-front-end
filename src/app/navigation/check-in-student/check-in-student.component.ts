import { Student } from './../../entities/student';
import { StudentService } from './../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-check-in-student',
  templateUrl: './check-in-student.component.html',
  styleUrls: ['./check-in-student.component.css']
})
export class CheckInStudentComponent implements OnInit {

  hapkidoStudents: MatTableDataSource<Student>;
  taekwondoStudents: MatTableDataSource<Student>;

  columnsToDisplay = ['name', 'belt', 'style'];

  constructor(private studentService: StudentService) { }

  @ViewChild('taekwondoPager') taekwondoPager: MatPaginator;
  @ViewChild('hapkidoPager') hapkidoPager: MatPaginator;

  @ViewChild('taekwondoSorter') taekwondoSorter: MatSort;
  @ViewChild('hapkidoSorter') hapkidoSorter: MatSort;


  ngOnInit() {
    this.taekwondoStudents = new MatTableDataSource<Student>(this.studentService.getUserByArt('TAEKWONDO'));
    this.hapkidoStudents = new MatTableDataSource<Student>(this.studentService.getUserByArt('HAPKIDO'));

    this.taekwondoStudents.paginator = this.hapkidoPager;
    this.hapkidoStudents.paginator = this.taekwondoPager;

    this.taekwondoStudents.sort = this.taekwondoSorter;
    this.hapkidoStudents.sort = this.hapkidoSorter;
  }

}
