import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateProductDTO, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: [ './product-form.component.scss' ]
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService) {

    this.productForm = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(''),
      description: new FormControl(''),
      categoryId: new FormControl(0),
      price: new FormControl(0)
    });

  }

  ngOnInit(): void {


    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== '0') {
      this.productService.getOne(id).subscribe(product => {
        this.productForm.patchValue({
          images: product.images[ 0 ],
          title: product.title,
          price: product.price,
          description: product.description,
          categoryId: product.category.id,
          creationAt: product.creationAt,
          updatedAt: product.updatedAt
        });
      });
    } else {
      // this.productForm = this.fb.group({
      //   images: [ '', Validators.required ],
      //   title: [ '', Validators.required, Validators.minLength(10) ],
      //   price: [ 1000, [ Validators.required, Validators.min(1000), Validators.max(100000000) ] ],
      //   description: [ '' ],
      //   category: [ 0, [ Validators.required, Validators.min(1), Validators.max(30) ] ],
      //   creationAt: [ new Date() ],
      //   updatedAt: [ new Date() ]
      // });
    }
  }


  onSubmit(): void {
    // if (this.productForm.valid) {
    const product: CreateProductDTO = this.productForm.value;
    this.productService.create(product).subscribe({
      next: (product: Product) => {

      },
      error(err) {

      },
    });
    // }
  }
}
