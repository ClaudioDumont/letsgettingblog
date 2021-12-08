import { Component, OnInit } from '@angular/core';
import { LetsGetCheckedBlogDataService } from './services/lets-get-checked-blog-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lets-get-checked-blog';

  constructor(
    private blogData: LetsGetCheckedBlogDataService
  ) {}

  ngOnInit(): void {
    this.blogData.getAllPostsData().subscribe(res => {
      console.log(res);
    })

    this.blogData.getAllCommentsSinglePostData(2).subscribe(res => {
      console.log('comments: ', res);
    })
    
  }
}
