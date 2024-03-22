import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

export const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: OrderComponent },
      { path: 'About', component: AboutUsComponent },
      { path: 'delete', component: DeleteComponent },
      {
        path: 'contact',
        component: ContactusComponent,
        canActivate: [authGuard],
      },
      { path: 'Details/:id', component: ProductDetailsComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'Product/update/:id', component: UpdateProductComponent },

      { path: 'login', component: LoginComponent },
    ],
  },

  { path: '**', component: NotfoundComponent },
];
