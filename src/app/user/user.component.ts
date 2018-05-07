import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  template: `{{ user | json }}
    <app-follower-list></app-follower-list>
  `
})
export class UserComponent implements OnInit {
  public user: string;
  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
  }

  onSearch($event) {
    const username = this.route.snapshot.paramMap.get('username');
    this.userService.getUserByUsername(username).subscribe(
      user => { this.user = user; }
    );  
  }

}
