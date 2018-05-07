import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.scss']
})
export class FollowerListComponent implements OnInit {


  public followers = [];

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.userService.getFollowersByUsername(username).subscribe(
      followers => { this.followers = followers; }
    );  
  }

  onSearch($event) {

  }

}
