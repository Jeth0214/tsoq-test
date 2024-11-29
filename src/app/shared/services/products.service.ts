import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  PRODUCTS: IProduct[] = [
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
    {
      id: 5,
      name: '5xl برجر',
      price: 500,
      image: './images/products/burger-meal.png'
    },
    {
      id: 6,
      name: '5xl برجر',
      price: 500,
      image: './images/products/burger-solo.png'
    },
    {
      id: 7,
      name: '5xl برجر',
      price: 500,
      image: './images/products/broasted.png'
    },
    {
      id: 8,
      name: '5xl برجر',
      price: 500,
      image: './images/products/burger-solo.png'
    },
  ];


  constructor() { }

  getAllProducts(): IProduct[] {
    return this.PRODUCTS;
   }
}
