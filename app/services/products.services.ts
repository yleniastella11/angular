import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    {
      id: 1,
      name: 'Figurine Astérix',
      price: 15,
      description: 'Petite figurine artisanale représentant Astérix.',
    },
    {
      id: 2,
      name: 'Figurine Obélix',
      price: 18,
      description: 'Obélix et son menhir sculptés à la main.',
    },
    {
      id: 3,
      name: 'Figurine Idéfix',
      price: 10,
      description: 'Le fidèle chien d’Obélix, miniature adorable.',
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}