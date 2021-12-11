import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetsGetCheckedBlogDataService } from '../../services/lets-get-checked-blog-data.service';
import * as models from '../../models/export';

@Component({
  selector: 'app-post-list-item-detail',
  templateUrl: './post-list-item-detail.component.html',
  styleUrls: ['./post-list-item-detail.component.scss']
})
export class PostListItemDetailComponent implements OnInit {

  public postItemDetail: models.LetsGetCheckedBlogPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    this.getPostData();
  }

  private getPostData():void {
    const postId = this.route.snapshot.params.postId;
    
    this.blogData.getSinglePostData(postId).subscribe(res => {
      console.log('singlePostData: ', res);
      this.postItemDetail = res;
    });
  }

  public backToHome() {
    this.router.navigate(['']);
  }
}
