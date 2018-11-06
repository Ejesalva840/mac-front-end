import { MOCKSTUDENTS } from '../entities/mock-students';
import { Injectable, OnInit } from '@angular/core';
import { Student } from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {

  studentsList: Student[];

  ngOnInit(): void {
  }

  constructor() {
    this.studentsList = MOCKSTUDENTS;
  }

  getAllUsers(): Student[] {
    return this.studentsList;
  }

  getUserByArt(martialArtStyle: String): Student[] {
    return this.studentsList.filter(user => user.martialStyle.toUpperCase() === martialArtStyle.toUpperCase());
  }
}
