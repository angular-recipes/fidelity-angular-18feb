import { AddBookFormTDFComponent } from './components/add-book-form-tdf/add-book-form-tdf.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: BookListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-book', component: AddBookFormTDFComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
