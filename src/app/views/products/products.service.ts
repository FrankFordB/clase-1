 import { Injectable } from "@angular/core";
 import { HttpClient } from "@angular/common/http";
 import { Observable } from "rxjs";

 export interface ProductModel {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
 }
 @Injectable({ providedIn: "root"})
 export class ProductService {
    private url = "https://fakestoreapi.com/products"
     constructor(private http: HttpClient){
        }
        getProducts(): Observable<ProductModel[]>{
            return this.http.get <ProductModel[]>(this.url)
        }
    }