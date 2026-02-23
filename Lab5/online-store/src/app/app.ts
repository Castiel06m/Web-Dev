import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category, Product } from './models';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList], // Импортируем наш список
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'Kaspi Store';
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Загружаем категории из сервиса при старте
    this.categories = this.productService.getCategories();
  }

  // Метод для выбора категории
  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.filteredProducts = this.productService.getProductsByCategory(id);
  }
}