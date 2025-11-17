import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  template: `
    <h2>Students</h2>
    <ul>
      @for (s of students; track s.name) {
        <li>
          {{s.name}} = {{s.course}}
        </li>
      }
    </ul>
  `
})
export class StudentListComponent {
  students = [
    { name: 'Aman Pardeshi', course: 'Angular' },
    { name: 'Rohit Sharma', course: 'React' },
    { name: 'Neha Patil', course: 'Java' },
    { name: 'Virat Kolhi', course: 'HTML' }
  ];
}
