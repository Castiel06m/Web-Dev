import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'; 

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product; 

  shareToTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    const telegramUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(telegramUrl, '_blank'); 
  }

  shareToWhatsapp() {
    const message = encodeURIComponent(`Check out this product: ${this.product.link}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank'); 
  }


  currentImg = 0;
  nextImg() {
    this.currentImg = (this.currentImg + 1) % this.product.images.length;
  }

  prevImg() {
    this.currentImg = this.currentImg === 0 ? this.product.images.length - 1 : this.currentImg - 1;
  }
}