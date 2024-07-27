import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CardModule } from '../component/card/card.component';
import { Product } from '../component/prodcut/Product';
import { PRODUCTS } from './PRODUCTS';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  products: Product[] = [];

  /**
   *
   */
  constructor() {
    this.products = PRODUCTS;
  }
}

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Home",
      urls: [ { title: "Home", url: "/home" }, { title: "Home" } ],
    },
    component: HomeComponent,
  },
];
@NgModule({
  imports: [
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule { }

