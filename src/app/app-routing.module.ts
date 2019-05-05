import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NavComponent} from '../app/nav/nav.component';
import {AboutComponent} from '../app/about/about.component';
import {HomeComponent} from '../app/home/home.component';
import {ProductsComponent} from '../app/products/products.component';
import {ContactComponent} from '../app/contact/contact.component';
import {AdminComponent} from '../app/admin/admin.component';
import {LoginComponent} from '../app/login/login.component';
import {HideComponent} from '../app/hide/hide.component';


const routes: Routes = [
  {path: 'nav' , component: NavComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'admin' , component: AdminComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'hide' , component: HideComponent},
  {path: '' , redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
