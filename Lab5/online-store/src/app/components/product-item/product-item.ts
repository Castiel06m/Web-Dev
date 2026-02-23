import { Component, input, output } from '@angular/core';
import { Product } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  product = input.required<Product>();
  
  remove = output<number>();

  isExpanded: boolean = false;

  onLike() {
    this.product().likes++;
  }

  onRemove() {
    this.remove.emit(this.product().id);
  }

  share(platform: string) {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Посмотри на этот товар: ${this.product().name}`);
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    }
  }
}