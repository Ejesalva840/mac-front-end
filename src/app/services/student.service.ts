import { StudentDetails } from './../entities/student-details';
import { MOCKSTUDENTS } from '../entities/mock-students';
import { Injectable, OnInit } from '@angular/core';
import { Student } from '../entities/student';
import { MOCKSTUDENTDETAILS } from '../entities/mock-student-details';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {

  studentsList: Student[];
  studentDetailsList: StudentDetails[];

  ngOnInit(): void {
  }

  constructor() {
    this.studentsList = MOCKSTUDENTS;
    this.studentDetailsList = MOCKSTUDENTDETAILS;
  }

  getAllUsers(): Student[] {
    return this.studentsList;
  }

  getUserByArt(martialArtStyle: String): Student[] {
    return this.studentsList.filter(user => user.martialStyle.toUpperCase() === martialArtStyle.toUpperCase());
  }

  getUserDetails(userId: number): StudentDetails {
    return this.studentDetailsList.find(student => student.studentId === userId);
  }
}
