import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductService } from '@core/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
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
          image: 'assets/images/Javascript-Stickers-Mugs.jpg',
          title: element.title ? `${element.title.slice(0, 18)}${element.title.length > 17 ? '...' : ''}` : 'No disponible',
          price: element.price || 0,
          description: element.description || 'Descripción no diponible',
        });
      });
      this.products = newArr;
    });
  }
}
