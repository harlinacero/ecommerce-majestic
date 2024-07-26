import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/component/prodcut/Product';


@Component({
  selector: 'app-prodcut',
  templateUrl: './prodcut.component.html',
  styleUrls: ['./prodcut.component.scss']
})
export class ProdcutComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      idProduct: ['', Validators.required],
      image: ['', Validators.required],
      productName: ['', Validators.required, Validators.minLength(10)],
      unitValue: [0, [Validators.required, Validators.min(1), Validators.min(0.01), Validators.max(100000000)]],
      description: [''],
      category: [''],
      stock: [0, [Validators.min(0)]],
      supplier: [''],
      createdAt: [new Date()],
      updatedAt: [new Date()],
      discount: [0, [Validators.min(0), Validators.max(100)]],
      tags: ['']
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      console.log('Product:', product);
      // Aquí puedes agregar la lógica para registrar o modificar el producto
    }
  }
}

