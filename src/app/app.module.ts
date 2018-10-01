import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './shared/layout/header.component';
import {SharedModule} from './shared/shared.module';
import {FooterComponent} from './shared/layout/footer.component';
import {HomeModule} from './home/home.module';
import {BrowseBooksModule} from './browse-books/browse-books.module';
import {ServicesModule} from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    BrowseBooksModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
