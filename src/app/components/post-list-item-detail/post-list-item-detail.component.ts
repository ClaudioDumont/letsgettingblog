import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetsGetCheckedBlogDataService } from 'src/app/services/lets-get-checked-blog-data.service';
import * as models from '../../models/export';

@Component({
  selector: 'app-post-list-item-detail',
  templateUrl: './post-list-item-detail.component.html',
  styleUrls: ['./post-list-item-detail.component.scss']
})
export class PostListItemDetailComponent implements OnInit {

  public postItemDetail: models.LetsGetCheckedBlogPost;
  public postItemDetailComments: models.LetsGetCheckedBlogPostComments[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogData: LetsGetCheckedBlogDataService
  ) {
      this.postItemDetail = {
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

    const postId = this.route.snapshot.params.postId;
    
    this.blogData.getSinglePostData(postId).subscribe(res => {
      console.log('singlePostData: ', res);
      this.postItemDetail = res;
    });

    this.blogData.getAllCommentsSinglePostData(postId).subscribe(res => {
      console.log('singlePostComentData: ', res);

      this.postItemDetailComments = res;

      console.log(this.postItemDetailComments);
    });
  }

}
