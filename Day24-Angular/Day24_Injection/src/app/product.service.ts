import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./services/product.service";
import { Product } from "./model/product.model";


//Angular HttpClient
// @Injectable({ providedIn: 'root'})
// export class ProductService {
//     private apiUrl = "https://fakestoreapi.com/products";

//     constructor(private http: HttpClient){}

//     getProducts(): Observable<any> {
//         return this.http.get(this.apiUrl);
//     }

//     addProducts(product: any): Observable<any>{
//         return this.http.post(this.apiUrl, product);
//     }

//     deleteProduct(id: number): Observable<any> {
//         return this.http.delete(`${this.apiUrl}/${id}`);
//     }
// }



//HTTP Inteceptors for Request/Response
@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService<Product> {
    private baseUrl = 'https://fakestoreapi.com/products';

    constructor(http: HttpClient) {
        super(http);
    }

    getProducts() {
        return this.getAll(this.baseUrl); // returns Observable<Product[]>
    }
}
