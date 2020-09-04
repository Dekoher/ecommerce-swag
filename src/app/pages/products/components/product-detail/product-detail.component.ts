import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../../core/services/product/product.service';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct(): void {
    const newProduct: Product = {
      id: '22',
      title: 'New From Angular Ecommerce',
      image: 'assets/images/127.0.0.1.jpg',
      price: 200,
      description: 'New product',
    };
    this.productService.createProduct(newProduct).subscribe( product => {
      // this.product = product;
      console.log(product);
    });
  }

  updateProduct(): void {
    const newProduct: Partial<Product> = {
      title: 'Updated by me',
      price: 50000,
      description: 'New product',
    };
    this.productService.updateProduct('1', newProduct).subscribe( product => {
      console.log(product);
    });
  }

  deleteProduct(): void {
    this.productService.deleteProduct('YYYYYY').subscribe( product => {
      console.log('product deleted=>', product);
    });
  }
}
