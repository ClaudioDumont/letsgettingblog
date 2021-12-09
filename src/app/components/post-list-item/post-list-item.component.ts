import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as models from './../../models/export';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() public postItem: models.LetsGetCheckedBlogPost;
  @Output() public selectedPostToView = new EventEmitter<number>();

  constructor() {

    this.postItem = {
      author: '',
      content: '',
      description: '',
      id: 0,
      publish_date: '',
      slug: '',
      title: ''
    }

   }

  ngOnInit(): void {
  }

  public viewPostDetail(postId: number) {
    this.selectedPostToView.emit(postId);
  }

}
