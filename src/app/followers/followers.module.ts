import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersRoutingModule } from './followers-routing.module';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FollowerDetailComponent } from './follower-list/follower-detail/follower-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FollowersRoutingModule
  ],
  declarations: [FollowerListComponent, FollowerDetailComponent]
})
export class FollowersModule { }
