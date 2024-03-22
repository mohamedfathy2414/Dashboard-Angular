import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { ICategory } from '../../modals/i-category';
import { CommonModule, NgFor } from '@angular/common';
import { IProduct } from '../../modals/i-product';
import { DeleteComponent } from '../delete/delete.component';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    FormsModule,
    ProductsComponent,
    CommonModule,
    NgFor,
    DeleteComponent,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  selectedCategoryId: number = 1;
  categories: ICategory[];
  newObject: IProduct = {
    name: '',
    id: 0,
    imgUrl: '',
    catId: 0,
    quantity: 0,
    price: 0,
  };
  quantitynw: any;
  productslist: IProduct[] = [];

  @ViewChild(ProductsComponent) prdcomp!: ProductsComponent;
  constructor() {
    this.categories = [
      { id: 1, name: 'mobile' },
      { id: 2, name: 'laptop' },
      { id: 3, name: 'taplet' },
    ];
  }

  viewObj(nwObj: IProduct): any {
    this.newObject = nwObj;
    this.productslist.push(this.newObject);
    // this.productslist.push(this.quantitynw);
  }

  ngAfterViewInit() {
    console.log(this.prdcomp.itemCount.nativeElement.value);
  }

  viewquant(totquant: any) {
    console.log(totquant);
  }
  delete() {
    console.log(this.productslist);
    console.log(this.newObject);

    this.productslist.shift();

    this.newObject = {
      name: '',
      id: 0,
      imgUrl: '',
      catId: 0,
      quantity: 0,
      price: 0,
      totalquantity: 0,
    };
  }
}
