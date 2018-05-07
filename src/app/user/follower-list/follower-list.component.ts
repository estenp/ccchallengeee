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


  @Input() followers = [];

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
    
  }

  // within this component, used to filter followers
  onSearch($event) {

  }

}
