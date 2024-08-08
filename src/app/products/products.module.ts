import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
    children: [
      {
        path: "product-form/:id",
        component: ProductFormComponent,

      }
    ]
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
