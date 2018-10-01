import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorService} from './author.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthorService
  ]
})
export class ServicesModule {
}
