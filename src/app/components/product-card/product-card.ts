import { Component, input, Input, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() id =0
  @Input() title = ""
  @Input() price = 0
  @Input() description = ""
  @Input() category = ""
  @Input() image = ""
}
