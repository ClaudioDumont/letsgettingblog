import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetsGetCheckedBlogDataService } from '../../services/lets-get-checked-blog-data.service';
import * as models from '../../models/export';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item-detail-comments',
  templateUrl: './post-list-item-detail-comments.component.html',
  styleUrls: ['./post-list-item-detail-comments.component.scss']
})
export class PostListItemDetailCommentsComponent implements OnInit, OnDestroy {
  public postItemDetailComments: models.LetsGetCheckedBlogPostComments[] = [];
  public postId:number = 0;
  public user: string = '';
  public commentary: string = '';
  public formComments: FormGroup;
  private subscriptionCommentsData$: Subscription = new Subscription;
  private subscriptionPostComment$: Subscription = new Subscription;

  constructor(
      private route: ActivatedRoute,
      private blogData: LetsGetCheckedBlogDataService,
      private formBuilder: FormBuilder,
      private datePipe: DatePipe
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

  ngOnDestroy(): void {
    this.subscriptionPostComment$.unsubscribe();
    this.subscriptionCommentsData$.unsubscribe();
  }

  private getCommentsData() {
   this.subscriptionCommentsData$ = this.blogData.getAllCommentsSinglePostData(this.postId).subscribe(res => {
      this.postItemDetailComments = res;
    });
  }

  public addCommentToPost(id:number) {

    let postDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    
    const comment = {
      content: this.formComments.get('commentary')?.value,
      date: postDate,
      parent_id: null,
      postId: id,
      user: !!this.formComments.get('user')?.value ? this.formComments.get('user')?.value : 'Anonymous User'
    }
    
    this.subscriptionPostComment$ = this.blogData.createNewCommentInSinglePost(id, comment).subscribe((response) => {
      if(!!response) {
        this.getCommentsData();
        this.formComments.reset();
      }
    });

  }

  public isControlInvalid(fieldName: string) {
    if (!this.formComments) {
        return false;
    }

    const control = this.formComments.get(fieldName);

    return control?.invalid;
  }

}
