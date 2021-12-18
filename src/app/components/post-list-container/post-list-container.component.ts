import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LetsGetCheckedBlogDataService } from '../../services/lets-get-checked-blog-data.service';
import * as models from '../../models/export';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-container',
  templateUrl: './post-list-container.component.html',
  styleUrls: ['./post-list-container.component.scss']
})
export class PostListContainerComponent implements OnInit, OnDestroy {

  public letsGetCheckedBlogData: models.LetsGetCheckedBlogPost[] = [];
  private subscriptionBlogData: Subscription = new Subscription;

  constructor(
    private blogData: LetsGetCheckedBlogDataService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.subscriptionBlogData = this.blogData.getAllPostsData().subscribe(res => {
     
      res.sort( (a, b) => {
        return <any>new Date(b.publish_date) - <any>new Date(a.publish_date);
      })
      
      this.letsGetCheckedBlogData = res; 
    })
  }
  
  ngOnDestroy(): void {
    this.subscriptionBlogData.unsubscribe();
  }

  public onSelectedPostToView(postId: number) {
    this.router.navigate(['postDetail', postId]);
  }

}
