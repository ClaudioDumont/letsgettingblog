import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListContainerComponent } from './components/post-list-container/post-list-container.component';
import { PostListItemDetailComponent } from './components/post-list-item-detail/post-list-item-detail.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component'

const routes: Routes = [
  {
    path: 'postDetail/:postId',
    component: PostListItemDetailComponent
  },
  {
    path: '',
    component: PostListContainerComponent
  },
  {path: 'not-found' , component: WrongRouteComponent},
  {path: '**' , redirectTo: '/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
