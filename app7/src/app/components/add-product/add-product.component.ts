import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../modals/i-category';
import { CategoryService } from '../../services/category.service';
import { IProduct } from '../../modals/i-product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  catlist: ICategory[] = [] as ICategory[];
  product: IProduct = {} as IProduct;

  constructor(
    private categoryService: CategoryService,
    private apiService: ApiService,
    private router: Router
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
    // this.updatep();
  }
  addNewProduct() {
    this.apiService.addNewProduct(this.product).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/Home');
    });
  }

  // updatep() {
  //   this.apiService.updateProduct(this.product).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
