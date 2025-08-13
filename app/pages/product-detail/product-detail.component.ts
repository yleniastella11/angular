import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // <- importer ici
import { ProductsService } from '../../services/products.services';

@Component({
  selector: 'app-product-detail',
  standalone: true, // <- important pour standalone
  imports: [CommonModule], // <- ajouter ici pour currency, ngIf, etc.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productsServices: ProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsServices.getProductById(id);
  }

  addToCart(product: any) {
    alert(`${product.name} a été ajouté au panier !`);
  }
}