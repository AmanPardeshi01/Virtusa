  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { FormsModule} from '@angular/forms';
  // import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
// template: `Hello {{ city }}, {{ 1 + 1 }}`,
//   standalone:true,
//   styles:`
//   :host{
//   color:blue
//   }`
// })
// export class AppComponent {
//   city = 'Pune';
// }

// @Component({
//   selector: 'app-root',
//   template: `
//   <h3> Fruit List</h3>
//   @for (fruit of fruits; track fruit){
//   <p> {{ fruit }}
//   }
//   `,
//   standalone:true,
//   styles:`
//   :host{
//   color:blue
//   }`
// })
// export class AppComponent {
//   fruits = ['Apple', 'Banana', 'Mango', 'Orange']
// }


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template:`
//   <button (click)="toggle()"> Toggle Message</button>
//   @if (showMessage){
//   <p>Welcome to Angular 18 if directive</p>
//   } @else {
//     <p>Message Hidden</p>
//     }
//   `
// })

// export class AppComponent {
//   showMessage = true;
//   toggle(){
//     this.showMessage = !this.showMessage
//   }
// }


// @Component({
//   selector:'app-root',
//   standalone:true,
//   imports: [FormsModule],
//   template:`
//    <h2>Simple Calculator</h2>

//   <input type="number" [(ngModel)]="num1" placeholder="Number 1" />
// <input type="number" [(ngModel)]="num2" placeholder="Number 2" />


//   <button (click)="add()">Add</button>
//   <p>Result: {{ result}}</p>
//   `
// })
// export class AppComponent{
//   num1 = 0;
//   num2 = 0;
//   result = 0;

//   add(){
//     this.result = this.num1 + this.num2;
//   }
// }


@Component({
  selector:'app-root',
  standalone:true,
   imports: [FormsModule],
  template:`
  <h2>TO DO List</h2>

  <input [(ngModel)]="task" placeholder="Enter a task" />
  <button (click)="addTask()">Add</button>

  @if (task.length > 0){
  @for(t of task; track t){
  <p>{{ t }}</p>
  }
  } @else {
   <p>No task yet!</p>
   }
  `
})

export class AppComponent {
  task = '';
  tasks: string[] = [];

  addTask() {
    if(this.task.trim()){
      this.tasks.push(this.task);
      this.task='';
    }
  }
}