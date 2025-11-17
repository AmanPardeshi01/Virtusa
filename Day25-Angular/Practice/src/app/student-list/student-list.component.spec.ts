import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
  students = [
    { id: 1, name: 'Aman Pardeshi', course: 'Angular' },
    { id: 2, name: 'Rohit Sharma', course: 'React' },
    { id: 3, name: 'Neha Patil', course: 'Java' },
  ];
}
