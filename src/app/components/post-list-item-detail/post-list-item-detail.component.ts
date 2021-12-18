import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetsGetCheckedBlogDataService } from '../../services/lets-get-checked-blog-data.service';
import * as models from '../../models/export';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item-detail',
  templateUrl: './post-list-item-detail.component.html',
  styleUrls: ['./post-list-item-detail.component.scss']
})
export class PostListItemDetailComponent implements OnInit, OnDestroy {

  public postItemDetail: models.LetsGetCheckedBlogPost | null;
  private subscriptionPostData$: Subscription = new Subscription;

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

  ngOnDestroy(): void {
    this.subscriptionPostData$.unsubscribe();
  }

  private getPostData():void {
    const postId = this.route.snapshot.params.postId;
    
    this.subscriptionPostData$ = this.blogData.getSinglePostData(postId).subscribe(res => {
        this.postItemDetail = res;
    }, error => {
      console.log('Error: ', error)
      this.postItemDetail = null;
    });
  }

  public backToHome() {
    this.router.navigate(['']);
  }
}
