import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemDetailCommentsComponent } from './post-list-item-detail-comments.component';

describe('PostListItemDetailCommentsComponent', () => {
  let component: PostListItemDetailCommentsComponent;
  let fixture: ComponentFixture<PostListItemDetailCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListItemDetailCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
