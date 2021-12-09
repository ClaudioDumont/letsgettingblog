import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-detail',
  templateUrl: './post-list-item-detail.component.html',
  styleUrls: ['./post-list-item-detail.component.scss']
})
export class PostListItemDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('teste');
  }

}
