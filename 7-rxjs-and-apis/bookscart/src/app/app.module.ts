import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { AddBookFormTDFComponent } from './components/add-book-form-tdf/add-book-form-tdf.component';
import { LastNameFirstPipe } from './pipes/last-name-first.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AboutComponent,
    ContactComponent,
    ShoppingCartComponent,
    BookDetailsComponent,
    AddBookFormComponent,
    AddBookFormTDFComponent,
    LastNameFirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
