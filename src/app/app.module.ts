import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { UserComponent } from './user/user.component';
import { FollowerListComponent } from './user/follower-list/follower-list.component';
import { FollowerDetailComponent } from './user/follower-list/follower-detail/follower-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FollowerListComponent,
    FollowerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
