import { Component, Input } from '@angular/core';
import { IProduct } from '../../shared/models/product.model';

@Component({
  selector: 'app-cart-lists',
  standalone: true,
  imports: [],
  templateUrl: './cart-lists.component.html',
  styleUrl: './cart-lists.component.scss'
})
export class CartListsComponent {
  products: IProduct[] = [
    {
      id: 1,
      name: '5xl برجر',
      price: 500,
      image: './images/products/burger-solo.png'
    },
    {
      id: 2,
      name: '5xl برجر',
      price: 500,
      image: './images/products/broasted.png'
    },
    {
      id: 3,
      name: '5xl برجر',
      price: 500,
      image: './images/products/burger-solo.png'
    },
    {
      id: 4,
      name: '5xl برجر',
      price: 500,
      image: './images/products/burger-meal.png'
    },
 ];
}
