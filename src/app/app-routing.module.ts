import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListContainerComponent } from './components/post-list-container/post-list-container.component';
import { PostListItemDetailComponent } from './components/post-list-item-detail/post-list-item-detail.component';

const routes: Routes = [
  {
    path: 'postDetail',
    component: PostListItemDetailComponent
  },
  {
    path: '',
    component: PostListContainerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
