import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // total = 99;
  total$: Observable<number>;
  constructor(private cartService: CartService) {
    // // first way (common subscription) to make reactive the counter badge
    // this.cartService.cart$.subscribe(products => {
    //   console.log('products in cart=>', products);
    //   this.total = products.length;
    // });
    // // second way (pipe) to make reactive the counter badge
    // this.cartService.cart$
    //   .pipe(map((product) => product.length))
    //   .subscribe((totalTransformed) => {
    //     console.log('products in cart=>', totalTransformed);
    //     this.total = totalTransformed;
    //   });
    // // third way (making the subscriptions through the html template with async)
    // // to make reactive the counter badge
    this.total$ = this.cartService.cart$.pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void {}
}
