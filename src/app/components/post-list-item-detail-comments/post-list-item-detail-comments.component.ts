import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetsGetCheckedBlogDataService } from '../../services/lets-get-checked-blog-data.service';
import * as models from '../../models/export';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-list-item-detail-comments',
  templateUrl: './post-list-item-detail-comments.component.html',
  styleUrls: ['./post-list-item-detail-comments.component.scss']
})
export class PostListItemDetailCommentsComponent implements OnInit {
  public postItemDetailComments: models.LetsGetCheckedBlogPostComments[] = [];
  public postId:number = 0;
  public user: string = '';
  public commentary: string = '';
  public formComments: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private blogData: LetsGetCheckedBlogDataService,
      private formBuilder: FormBuilder
    ) {

      this.postId = this.route.snapshot.params.postId;

      this.formComments = this.formBuilder.group(
        {
          user: new FormControl(this.user, [Validators.minLength(4)]),
          commentary: new FormControl(this.commentary, [Validators.required]),
        }
      )
    
  }

  ngOnInit(): void {
    this.getCommentsData();
  }

  private getCommentsData() {
    this.blogData.getAllCommentsSinglePostData(this.postId).subscribe(res => {
      this.postItemDetailComments = res;
    });
  }

  private getLastCommentId() {
    return this.postItemDetailComments.reduce((acc, item) => acc = acc > item.id ? acc : item.id, 0);
  }

  public addCommentToPost(id:number) {
    const comment = {
      content: this.formComments.get('commentary')?.value,
      date: String(new Date().getDate),
      id: this.getLastCommentId() + 1,
      parent_id: null,
      postId: id,
      user: this.formComments.get('user')?.value
    }

    this.blogData.createNewCommentInSinglePost(id, comment );

    console.log(id, comment);

    this.getCommentsData();
  }

  public isControlInvalid(fieldName: string) {
    if (!this.formComments) {
        return false;
    }

    const control = this.formComments.get(fieldName);

    return control?.invalid;
  }

}
