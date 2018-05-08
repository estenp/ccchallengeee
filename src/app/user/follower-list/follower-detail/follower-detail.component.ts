import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follower-detail',
  templateUrl: './follower-detail.component.html',
  styleUrls: ['./follower-detail.component.scss']
})
export class FollowerDetailComponent implements OnInit {

  @Input() followername = '';
  private user = [];

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.followername = this.route.snapshot.paramMap.get('followername');

    this.userService.getUserByUsername(this.followername).subscribe(
      user => { 
          let newArray = [];
          newArray = user;
          this.user = newArray;

      }
  ); 
  }

}
