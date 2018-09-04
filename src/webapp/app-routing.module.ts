import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './modules/home/home.component';
import { ContactComponent }      from './modules/contact/contact.component';
import { RequestQuoteComponent }      from './modules/contact/requestQuote/requestQuote.component';
import { SignUpComponent }      from './modules/contact/signup/signUp.component';
import { ProductsComponent }      from './modules/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/requestQuote', component: RequestQuoteComponent },
  { path: 'contact/signup', component: SignUpComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}