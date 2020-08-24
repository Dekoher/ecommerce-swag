import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Product } from '../../../products/components/products/product.model';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() addProductToCart: EventEmitter<any> = new EventEmitter();

  date  = new Date();
  constructor() {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('onChanges', changes);
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  addToCart(): void {
    console.log('added');
    this.addProductToCart.emit(this.product.id);
  }
}
