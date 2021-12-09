import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { LetsGetCheckedBlogDataService } from 'src/app/services/lets-get-checked-blog-data.service';
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
    this.blogData.getSinglePostData(postId).subscribe(res => {
      console.log('singlePostData: ', res);
    });

    this.blogData.getAllCommentsSinglePostData(postId).subscribe(res => {
      console.log('singlePostComentData: ', res);
    })
  }

}
