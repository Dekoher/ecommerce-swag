import { Injectable } from '@angular/core';
import { Product } from '../pages/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/img/127-0-0-1.jpg',
      title: 'Localhost',
      price: 200,
      description: 'Localhost',
    },
    {
      id: '2',
      image: 'assets/img/bigCenterAngular.jpg',
      title: 'Angular',
      price: 200,
      description: 'Angular',
    },
    {
      id: '3',
      image: 'assets/img/bigCenterJs.png',
      title: 'JavaScript',
      price: 250,
      description: 'JavaScript',
    },
    {
      id: '4',
      image: 'assets/img/MenReactJS.jpg',
      title: 'React',
      price: 200,
      description: 'React',
    },
    {
      id: '5',
      image: 'assets/img/vue.jpg',
      title: 'Vue',
      price: 200,
      description: 'Vue',
    },
    {
      id: '6',
      image: 'assets/img/Javascript-Stickers-Mugs.jpg',
      title: 'Many Stickers',
      price: 300,
      description: 'Many Stickers',
    },
  ];
  constructor() { }

  getAllProducts(): Product[]  {
    return this.products;
  }

  getProduct(id: string): Product {
    return this.products.find(product => product.id === id);
  }
}
