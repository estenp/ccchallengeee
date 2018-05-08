import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, UserDetailComponent],
  exports: [
    CommonModule,
    HttpClientModule,
    SearchComponent,
    UserDetailComponent
  ]
})
export class SharedModule { }
