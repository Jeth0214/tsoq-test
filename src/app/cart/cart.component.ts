import { Component, inject } from '@angular/core';
import { CartCustomerComponent } from './cart-customer/cart-customer.component';
import { CartListsComponent } from './cart-lists/cart-lists.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCustomerComponent, CartListsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
}
