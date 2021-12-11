import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LetsGetCheckedBlogDataService } from '../../services/lets-get-checked-blog-data.service';
import * as models from '../../models/export';

@Component({
  selector: 'app-post-list-container',
  templateUrl: './post-list-container.component.html',
  styleUrls: ['./post-list-container.component.scss']
})
export class PostListContainerComponent implements OnInit {

  public letsGetCheckedBlogData: models.LetsGetCheckedBlogPost[] = [];


  constructor(
    private blogData: LetsGetCheckedBlogDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.blogData.getAllPostsData().subscribe(res => {

      res.sort( (a, b) => {
        return <any>new Date(b.publish_date) - <any>new Date(a.publish_date);
      })

      this.letsGetCheckedBlogData = res; 
    })
  }


  public onSelectedPostToView(postId: number) {
    this.router.navigate(['postDetail', postId]);
  }

}
