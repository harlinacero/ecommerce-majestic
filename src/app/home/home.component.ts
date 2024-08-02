import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CardModule } from '../component/card/card.component';


import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { BannerModule } from '../component/banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  limit = 10;
  offset = 0;
  status: 'loading' | 'success' | 'error' | 'init' = 'init';
  rtaService = '';
  /**
   *
   */
  constructor(private productService: ProductService) {
    
  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.status = 'loading';
    this.productService.getAll(this.limit, this.offset).subscribe({
      next: (products) => {
        this.products = [...this.products, ...products.map(p => {
          return {
            ...p,
            image: p.images.length > 0 ? JSON.parse(p.images[0]) : 'https://via.placeholder.com/150'
        }})];
        this.offset += this.limit;
        this.status = 'success';
      },
      error: (error) => {
        setTimeout(() => {
          this.products = [];
          this.status = 'error';
          console.error(error);          
        }, 300);
      }
    });
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
    BannerModule,
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

