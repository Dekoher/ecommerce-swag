import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../../../core/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/img/127-0-0-1.jpg',
  //     title: 'Localhost',
  //     price: 200,
  //     description: 'Localhost',
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/img/bigCenterAngular.jpg',
  //     title: 'Angular',
  //     price: 200,
  //     description: 'Angular',
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/img/bigCenterJs.png',
  //     title: 'JavaScript',
  //     price: 250,
  //     description: 'JavaScript',
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/img/MenReactJS.jpg',
  //     title: 'React',
  //     price: 200,
  //     description: 'React',
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/img/vue.jpg',
  //     title: 'Vue',
  //     price: 200,
  //     description: 'Vue',
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/img/Javascript-Stickers-Mugs.jpg',
  //     title: 'Many Stickers',
  //     price: 300,
  //     description: 'Many Stickers',
  //   },
  // ];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  addTocart(id: number): void {
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe(products => {
      const newArr = [];
      products.forEach(element => {
        newArr.push({
          id: element.id,
          image: 'assets/img/Javascript-Stickers-Mugs.jpg',
          title: element.title ? `${element.title.slice(0, 18)}${element.title.length > 17 ? '...' : ''}` : 'No disponible',
          price: element.price || 0,
          description: element.description || 'Descripción no diponible',
        });
      });
      this.products = newArr;
    });
  }
}
