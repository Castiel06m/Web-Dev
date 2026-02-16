import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'; 
import { ProductCard } from '../product-card/product-card'; 

@Component({
  selector: 'app-product-list',
  standalone: true, 
  imports: [CommonModule, ProductCard], 
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'PIXEL i5-10400F / RTX 3060 12 Гб / 16 Гб / 0 Гб SSD 512 Гб / Win 10',
      description: 'Системный блок.',
      price: 335000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/hb0/64048536518686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h5b/64048538484766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h64/83559338835998.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/pixel-i5-10400f-rtx-3060-16gb-512-gb-ssd-win-10-103421555/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 2,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'Улучшенное шумоподавление и до 6 часов работы на одном заряде.',
      price: 115000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h72/84108189696030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h6c/84108189761566.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-magsafe-case-belyi-113558963/'
    },
    {
      id: 3,
      name: 'Мягкая игрушка пингвин, 21 см',
      description: 'Мягкая игрушка в виде пингвина.',
      price: 1490,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h63/67735203971102.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h55/h63/67735203971102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h16/67735209476126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h73/he5/67735209738270.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-pingvin-vysota-21-sm-mul-tikolor-108379343/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 4,
      name: 'Укулеле сопрано MuzLife MUSIC ALMATY 5453780254 розовый',
      description: 'Познакомьтесь с укулеле MuzLife MUSIC ALMATY.',
      price: 11990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/pbc/39513076.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe3/pbc/39513076.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/pb9/39513083.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5d/pb9/39513087.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ukulele-soprano-muzlife-music-almaty-5453780254-rozovyi-138894965/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 5,
      name: 'Лежак LezhankaSer 60x60 см',
      description: 'Лежанка для вашего котика.',
      price: 2490,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h58/84858442350622.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h58/84858442350622.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/h77/84858442416158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/ha2/84858442481694.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lezhak-lezhankaser-60x60-sm-108181720/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 6,
      name: 'Пульт ДУ HYAOU RM-L1162',
      description: 'хахахах пульт.',
      price: 599,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h11/64411382480926.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h79/h11/64411382480926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/hb7/64411384250398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd0/64411386478622.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hyaou-rm-l1162-103582436/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 7,
      name: 'Кресло-мешок Pufi Dinmeca 462 , чехол велюр, коричневый.',
      description: 'POOфик',
      price: 16497,
      rating: 4.87,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/p4e/82461538.bin?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4f/p4e/82461538.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p4e/82461539.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/p4b/82461540.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kreslo-meshok-pufi-dinmeca-462-chehol-veljur-korichnevyi-106723101/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 8,
      name: 'Ручка шариковая Obama OB-12345 1 шт, 0.7 мм, цвет чернил синий',
      description: 'Ну тут ручка Obama за 10 тг, что тут думать.',
      price: 10,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/p5b/25040430.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p14/p5b/25040430.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/p3a/67380702.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/p3a/67380703.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-ob-12345-1-sht-0-7-mm-tsvet-chernil-sinii-106183439/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 9,
      name: 'Snickers Super шоколадный батончик молочный 80 г',
      description: 'Не тормози.',
      price: 747,
      rating: 4.92,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p4e/11814886.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pac/p4e/11814886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p4e/11814889.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p4b/11814890.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/snickers-super-shokoladnyi-batonchik-molochnyi-80-g-102153456/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    },
    {
      id: 10,
      name: 'Тестостероновый бустер Lokman Ada трибулус раствор',
      description: 'РААААААААААААААААААААААА.',
      price: 4300,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h6b/64413365993502.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/h6b/64413365993502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/hed/86894264746014.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pff/p62/9646433.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/testosteronovyi-buster-lokman-ada-tribulus-rastvor-103529630/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7i-ko2WSnsfgNweOPhfU_XFO&gclid=CjwKCAiAncvMBhBEEiwA9GU_foYqLZSlws4UTCdJR3boEJabRQHi2RYGqpBnNyWNIUmTi8C8XXllxhoCuSwQAvD_BwE'
    }
  ];
}