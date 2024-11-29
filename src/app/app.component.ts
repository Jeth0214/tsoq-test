import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, CartComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tsoq-test';
}
