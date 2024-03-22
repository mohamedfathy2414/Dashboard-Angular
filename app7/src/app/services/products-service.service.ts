import { Injectable } from '@angular/core';
import { IProduct } from '../modals/i-product';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'oppo',
        imgUrl: 'assets/mob.jpeg',
        catId: 1,
        quantity: 1,
        price: 10000,
      },
      {
        id: 3,
        name: 'nokia',
        imgUrl: 'assets/lap.jpeg',
        catId: 2,
        quantity: 0,
        price: 15000,
      },
      {
        id: 4,
        name: 'samsung',
        imgUrl: 'assets/tap.jpeg',
        catId: 3,
        quantity: 20,
        price: 8000,
      },
      {
        id: 5,
        name: 'samsung',
        imgUrl: 'assets/mob.jpeg',
        catId: 1,
        quantity: 27,
        price: 8000,
      },
      {
        id: 6,
        name: 'samsung',
        imgUrl: 'assets/lap.jpeg',
        catId: 2,
        quantity: 27,
        price: 8000,
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(Id: number): IProduct | null {
    let product = this.products.find((prd) => prd.id == Id);

    return product ? product : null;
  }

  getProductByCatId(catIdd: number): IProduct[] {
    return this.products.filter((prd) => prd.catId == catIdd);
  }

  getProductsIds(): number[] {
    return this.products.map((prd) => prd.id);
  }
}
