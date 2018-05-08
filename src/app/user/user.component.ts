import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <section>
        <ng-container *ngIf="view === 'followerDetail'">
            <a routerLink="/user/{{user['login']}}"> < {{user['login']}} </a>
        </ng-container>
        <div>
            <h1>{{ username }}</h1><h2>{{ fullname }}</h2>
        </div>
        <app-search id="user-search" placeholder="Search for a User" (searching)="onSearch($event)"></app-search>
        <section class="panel">
            <ng-container *ngIf="user">

                <app-user-detail [user]="user">          
                    <app-follower-list [user]="user.login" [followers]="this.followers"></app-follower-list>
                </app-user-detail>  

            </ng-container>
        </section>
    </section>
  `,
  styleUrls: ['./user.component.scss' ]
})
export class UserComponent implements OnInit {
  public user = [];
  public followers = [];
  public username: string;
  public fullname: string;
  private view = 'followerList';

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private userService: UserService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.view = this.route.snapshot.data.view;
    console.log(this.view);
    this.username = username;
      if (this.username) {
        this.onSearch(this.username);
      }
  }

  onSearch(criteria) {

    this.username = criteria;
    this.router.navigate(['/user', this.username]);
    this.userService.getUserByUsername(this.username).subscribe(
        user => { 
            let newArray = [];
            newArray = user;
            this.user = newArray;
            this.fullname = user['name'];
        }
    );  

    this.userService.getFollowersByUsername(this.username).subscribe(
      followers => { this.followers = followers; console.log(this.followers)}
    );
  }

}
