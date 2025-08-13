import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // <-- à ajouter

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // <-- ajouter RouterModule
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // Liste des produits avec ID
  products: { id: number; name: string; price: number }[] = [
    { id: 1, name: 'Figurine Astérix', price: 19.99 },
    { id: 2, name: 'Figurine Obélix', price: 24.99 },
    { id: 3, name: 'Figurine Idéfix', price: 14.99 }
  ];

  searchTerm: string = '';
  cart: { id: number; name: string; price: number; quantity: number }[] = [];
  sortOrder: string = '';

  sortProducts(order: string) {
    this.sortOrder = order;
    if (order === 'asc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  get filteredProducts() {
    const term = this.searchTerm?.toLowerCase() || '';
    return this.products.filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }

  addToCart(product: { id: number; name: string; price: number }) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  get totalCartPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}