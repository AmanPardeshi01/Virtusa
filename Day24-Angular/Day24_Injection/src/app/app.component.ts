import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <h3>Product List</h3>
  <ul>
    <li *ngFor="let product of products">{{ product.title}}</li>
  </ul>
  `
})
export class AppComponent {
  title = 'Day24_Injection';
  products: any[] = [];

  constructor(public productService: ProductService) {}

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: data => this.products = data,
      error: err => console.error('Error', err)
    });
  }
}
