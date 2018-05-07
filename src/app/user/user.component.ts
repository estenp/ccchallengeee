import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
  
    <div style="background-color: red;">{{ user | json }}</div>

    <app-search id="user-search" placeholder="Search for a User" (searching)="onSearch($event)"></app-search>
    <app-follower-list [followers]="this.followers"></app-follower-list>
  `
})
export class UserComponent implements OnInit {
  public user: Array<any>;
  public followers = [];
  public username: string;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private userService: UserService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username);
    this.username = username;
      if (this.username) {
        this.onSearch(this.username);
      }
  }

  onSearch(criteria) {

    this.username = criteria;
    //this.router.navigate(['/user', this.username]);
    this.userService.getUserByUsername(this.username).subscribe(
      user => { this.user = user; }
    );  

    this.userService.getFollowersByUsername(this.username).subscribe(
      followers => { this.followers = followers; }
    );
  }

}
