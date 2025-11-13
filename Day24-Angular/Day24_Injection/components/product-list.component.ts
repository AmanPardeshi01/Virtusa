import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Product } from "../src/app/model/product.model";
import { ProductService } from "../src/app/product.service";



@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-list.compoent.html'


})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    loading = true;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: (data) => {
                this.products = data;
                this.loading = false;
            },
            error: (err) => console.error('Error loading products', err)
        });
    }
}