import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.scss']
})
export class FollowerListComponent implements OnInit {

  @Input() user: string;
  @Input() followers = [];
  private username = '';

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
    //console.log(this.followers);
    this.username = this.route.snapshot.paramMap.get('username');
  }

  // within this component, used to filter followers
  onSearch($event) {

  }

}
