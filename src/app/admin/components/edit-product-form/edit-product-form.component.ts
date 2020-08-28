import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../core/services/product/product.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss'],
})
export class EditProductFormComponent implements OnInit {
  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField() {
    return this.form.get('price');
  }
}
