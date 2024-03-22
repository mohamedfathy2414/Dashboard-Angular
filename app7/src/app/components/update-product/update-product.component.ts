import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../modals/i-category';
import { IProduct } from '../../modals/i-product';
import { CategoryService } from '../../services/category.service';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  catlist: ICategory[] = [] as ICategory[];
  product: IProduct = {} as IProduct;
  productId: any;

  constructor(
    private categoryService: CategoryService,
    private apiService: ApiService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.catlist = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.activatedRouter.paramMap.subscribe((params) => {
      console.log(params);

      this.productId = params.get('id');
      this.apiService.getProductById(this.productId).subscribe({
        next: (res) => (this.product = res),
      });
    });
  }
  addNewProduct() {
    this.apiService.addNewProduct(this.product).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/Home');
    });
  }

  update() {
    this.apiService
      .updateProduct(this.product, this.productId)
      .subscribe((res) => {
        this.router.navigateByUrl('/Home');
      });
  }
}
