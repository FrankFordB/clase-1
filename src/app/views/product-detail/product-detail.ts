import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { ProductModel, ProductService } from '../products/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  imports: [Header, Footer,RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product: ProductModel | undefined
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  async ngOnInit() : Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    const products = await firstValueFrom(this.productService.getProducts())
    this.product = products.find(product => product.id === id)
  }
}
