import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LetsGetCheckedBlogDataService } from './services/lets-get-checked-blog-data.service';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListContainerComponent } from './components/post-list-container/post-list-container.component';
import { PostListItemDetailComponent } from './components/post-list-item-detail/post-list-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListContainerComponent,
    PostListItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LetsGetCheckedBlogDataService
  ],
  bootstrap: [AppComponent],
  exports: [
    PostListItemComponent,
    PostListContainerComponent,
    PostListItemDetailComponent
  ]
})
export class AppModule { }
