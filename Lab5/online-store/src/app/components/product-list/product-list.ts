import { Component, input } from '@angular/core';
import { Product } from '../../models';
import { ProductItem } from '../product-item/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem], 
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = input.required<Product[]>();

  displayProducts: Product[] = [];

  handleRemove(id: number) {
    this.displayProducts = this.displayProducts.filter(p => p.id !== id);
  }

  // Следим за обновлением входящих данных
  ngOnChanges() {
    this.displayProducts = this.products();
  }
}