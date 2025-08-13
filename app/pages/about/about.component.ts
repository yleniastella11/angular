import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  totalProducts = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    const products = this.productsService.getProducts();
    this.totalProducts = products.length;
  }
}