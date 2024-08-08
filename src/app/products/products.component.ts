import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  // paginatedProducts: Product[] = [];
  currentPage = 0;
  itemsPerPage = 10;
  totalPages = 0;
  // totalPagesArray: number[] = [];


  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.getAllProducts(this.itemsPerPage, this.currentPage);
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });
  }

  ngOnDestroy(): void {
    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: {},
    //   queryParamsHandling: 'merge',
    //   replaceUrl: true
    // });
  }

  getAllProducts(limit: number, offset: number) {
    this.productService.getAll(limit, offset).subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        setTimeout(() => {
          this.products = [];
          console.error(error);
        }, 300);
      }
    });
  }



  changePage(page: number) {
    if (page < 1) {
      return;
    }
    this.currentPage = page;
    this.getAllProducts(this.itemsPerPage, this.currentPage);
  }

}
