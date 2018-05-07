import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <section class="panel">
        <app-search id="user-search" placeholder="Search for a User" (searching)="onSearch($event)"></app-search>    
        <ng-container *ngIf="user">
            <ul>
                <li *ngFor="let data of user; index as i">
                    {{data}}
                </li>
            </ul>
        </ng-container>
        <app-follower-list [followers]="this.followers"></app-follower-list>
    </section>
  `
})
export class UserComponent implements OnInit {
  public user: Array<any>;
  public followers = [];
  public username: string;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private userService: UserService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(this.user);
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
            for (let property of Object.keys(user)) {
                newArray.push(user[property]);
            }
            this.user = newArray;
            //console.log(this.user);
        }
    );  
    

    this.userService.getFollowersByUsername(this.username).subscribe(
      followers => { this.followers = followers; console.log(this.followers)}
    );
  }

}
