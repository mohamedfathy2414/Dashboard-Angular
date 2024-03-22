import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from '../../services/products-service.service';
import { IProduct } from '../../modals/i-product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productid: number = 0;
  product: IProduct | null = null;
  productsIds!: number[];
  constructor(
    private activatedRouter: ActivatedRoute,
    private productsSer: ProductsServiceService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    // this.productid = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.activatedRouter.paramMap.subscribe((params) => {
      this.productid = Number(params.get('id'));

      this.product = this.productsSer.getProductById(this.productid);
    });

    this.productsIds = this.productsSer.getProductsIds();
  }

  goBack() {
    this.location.back();
  }
  prev() {
    this.productsIds = this.productsSer.getProductsIds();

    let index = this.productsIds.indexOf(this.productid);

    this.router.navigateByUrl(`/Details/${this.productsIds[--index]}`);
  }
}
