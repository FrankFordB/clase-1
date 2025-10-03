import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from "../../components/footer/footer";
import { ProductCard } from "../../components/product-card/product-card";
import { ProductModel, ProductService } from './products.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [Header, Footer, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  Products: ProductModel[] = []
  cargando = true

  constructor (private productService: ProductService) {}
  async ngOnInit(): Promise<void> {
    try {
      const data = await firstValueFrom(this.productService.getProducts())
      this.Products = data
    } catch (error) {
      console.log("error al consumir la data")
    } finally {
      this.cargando = false
    }
  }
}
