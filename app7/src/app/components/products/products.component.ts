import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../../modals/i-product';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../modals/i-category';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { NationlIdPipe } from '../../pipes/nationl-id.pipe';
import { CreditcardPipe } from '../../pipes/creditcard.pipe';
import { ProductsServiceService } from '../../services/products-service.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardDirective,
    NationlIdPipe,
    CreditcardPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [] as IProduct[];
  filteredProduct: IProduct[];
  counter: number = 0;
  totalquant: any = 0;

  totalOrderPrice: number = 0;
  selectedCategoryId: number = 1;
  nationalID: string = '30105171402256';
  credit: string = '0123456789123456';
  todaydate: Date = new Date();

  @Input() receivedSelectedCatId: number = 1;

  @Output() onObjCreated: EventEmitter<IProduct>;
  @Output() onquantityChanged: EventEmitter<number>;

  @ViewChild('itemCount') itemCount!: ElementRef;

  constructor(private apiService: ApiService, private router: Router) {
    this.onObjCreated = new EventEmitter<IProduct>();
    this.onquantityChanged = new EventEmitter<number>();

    this.filteredProduct = this.products;
  }
  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.filteredProduct = this.products;
    });
  }

  buy(quan: IProduct) {
    quan.quantity--;
    console.log(quan);
    this.totalquant = this.itemCount.nativeElement.value;

    let obj: IProduct = {
      name: quan.name,
      price: quan.price,
      quantity: quan.quantity,
      id: quan.id,
      catId: quan.catId,
      imgUrl: quan.imgUrl,
      totalquantity: this.totalquant,
    };

    this.onObjCreated.emit(obj);

    console.log(this.totalquant);
    return obj;
  }

  ngOnChanges() {
    this.apiService
      .getProductByCatId(this.receivedSelectedCatId)
      .subscribe((data) => {
        this.filteredProduct = data;
      });
  }

  gotodetails(id: number) {
    this.router.navigateByUrl(`/Details/${id}`);
  }

  deleteproduct(prod: any) {
    this.apiService.deleteProduct(prod).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/product/add');
    });
  }

  updateproduct(id: number) {
    this.router.navigate(['/Product/update', id]);
  }
}
