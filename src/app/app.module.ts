import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AuthorService} from "./services/author.service";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from './shared/layout/header.component';
import {SharedModule} from "./shared/shared.module";
import { FooterComponent } from './shared/layout/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
