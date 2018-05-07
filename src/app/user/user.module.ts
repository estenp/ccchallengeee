import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
//import { UserRoutingModule } from './user-routing.module';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FollowerDetailComponent } from './follower-list/follower-detail/follower-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    //UserRoutingModule,
    SharedModule
  ],
  declarations: [UserComponent, FollowerListComponent, FollowerDetailComponent]
})
export class UserModule { }
