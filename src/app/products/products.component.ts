import { Component, inject } from '@angular/core';
import { ProductsToolbarComponent } from './products-toolbar/products-toolbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { IProduct } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsToolbarComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  _productsService = inject(ProductsService);
  products: IProduct[] = this._productsService.getAllProducts();
}
