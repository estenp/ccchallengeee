import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../follower.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.scss']
})
export class FollowerListComponent implements OnInit {

  public followers = [];

  constructor(private followerService: FollowerService) { }

  ngOnInit() {
    this.followerService.getFollowersByUsername('collinforrester').subscribe(
      followers => { this.followers = followers; }
    );  
  }

}
