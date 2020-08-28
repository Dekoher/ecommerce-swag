import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>  {
    return this.http.get<Product[]>(`${environment.products_API}/products`);
    // return this.products;
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products_API}/products/${id}`);
    // return this.products.find(product => product.id === id);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.products_API}/products`, product);
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product>  {
    return this.http.put<Product>(`${environment.products_API}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<Product>  {
    return this.http.delete<Product>(`${environment.products_API}/products/${id}`);
  }
}
