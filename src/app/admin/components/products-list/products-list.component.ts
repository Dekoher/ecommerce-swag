import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService: ProductService) { }
  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe(product => {
      // console.log(product);
      // this.fetchProducts();
      if (product) {
        const index = this.products.findIndex((oth) => oth.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }
}
