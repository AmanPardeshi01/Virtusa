// import { Component, Input } from '@angular/core';

// @Component({
//     selector: 'app-child',
//     standalone: true,
//     template: `
// <p>Hello, {{ name }}! </p>`
// })

// export class ChildComponent {
//     @Input({ required: true }) name !: string;
// }


// import {Component, Output, EventEmitter} from '@angular/core';

// @Component({
//   selector: 'app-child',
//   styles: `.btn { padding: 5px; }`,
//   template: `
//     <button class="btn" (click)="addItem()">Add Item</button>
//   `,
//   standalone: true,
// })
// export class ChildComponent {
//   @Output() addItemEvent = new EventEmitter<string>();

//   addItem() {
//     this.addItemEvent.emit('🐢');
//   }
// }
