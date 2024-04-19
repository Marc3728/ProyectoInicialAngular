import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  formSubmited = false;
  saved = false;
  products: Product[] = [];
  similarProducts: Product[] = [];

  productForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(4)]],
    favorite: [null],
    price: [
      null,
      [Validators.required, Validators.min(1), Validators.max(999)],
    ],
    description: [null, [Validators.required, Validators.maxLength(350)]],
  });

  formValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.products$.subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log('Cant get data');
      }
    );
  }

  sendProductInfo() {
    if (!this.formSubmited) this.formSubmited = true;
    if (this.productForm.invalid) return;
    this.formValue = this.productForm.value;
    const product = {
      product: this.formValue.name,
      price: this.formValue.price,
      currency: '€',
      rating: 3,
      description: this.formValue.description,
      img: '',
      favorite: this.formValue.favorite,
      similarProducts: this.similarProducts,
      reviews: null,
    };
    this.productService.addProduct(product);
    this.saved = true;
  }

  validateField(field: string): boolean {
    console.log(this.productForm.get('name'));
    return (
      this.productForm.controls[field].invalid &&
      this.productForm.controls[field].touched
    );
  }

  addSimilarProduct(product: Product) {
    if (this.checkAddedCart(product)) {
      this.similarProducts.splice(this.products.indexOf(product), 1);
      return;
    }

    this.similarProducts.push(product);
  }

  private checkAddedCart(product: Product) {
    return this.similarProducts.find((p) => p.product == product.product);
  }
}
