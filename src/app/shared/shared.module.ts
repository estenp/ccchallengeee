import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent],
  exports: [
    CommonModule,
    HttpClientModule,
    SearchComponent
  ]
})
export class SharedModule { }
