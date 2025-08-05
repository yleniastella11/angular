import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // Liste des produits
  products: { name: string; price: number }[] = [
    { name: 'Figurine Astérix', price: 19.99 },
    { name: 'Figurine Obélix', price: 24.99 },
    { name: 'Figurine Idéfix', price: 14.99 }
  ];

  // Recherche
  searchTerm: string = '';

  // Panier
  cart: { name: string; price: number; quantity: number }[] = [];

  // Tri
  sortOrder: string = '';

  // Tri des produits
  sortProducts(order: string) {
    this.sortOrder = order;
    if (order === 'asc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  // Filtrer les produits
  get filteredProducts() {
    const term = this.searchTerm?.toLowerCase() || '';
    return this.products.filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }

  // Ajouter au panier
  addToCart(product: { name: string; price: number }) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  // Total du panier
  get totalCartPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}