import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LetsGetCheckedBlogDataService } from './services/lets-get-checked-blog-data.service';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListContainerComponent } from './components/post-list-container/post-list-container.component';
import { PostListItemDetailComponent } from './components/post-list-item-detail/post-list-item-detail.component';
import { PostListItemDetailCommentsComponent } from './components/post-list-item-detail-comments/post-list-item-detail-comments.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListContainerComponent,
    PostListItemDetailComponent,
    PostListItemDetailCommentsComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LetsGetCheckedBlogDataService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  exports: [
    PostListItemComponent,
    PostListContainerComponent,
    PostListItemDetailComponent,
    PostListItemDetailCommentsComponent,
    WrongRouteComponent
  ]
})
export class AppModule { }
