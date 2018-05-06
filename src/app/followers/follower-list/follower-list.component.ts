import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../follower.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.scss']
})
export class FollowerListComponent implements OnInit {


  public followers = [];

  constructor(private route: ActivatedRoute, private location: Location, private followerService: FollowerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('username');
    this.followerService.getFollowersByUsername('collinforrester').subscribe(
      followers => { this.followers = followers; }
    );  
  }

}
