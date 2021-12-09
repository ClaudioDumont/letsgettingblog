import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemDetailComponent } from './post-list-item-detail.component';

describe('PostListItemDetailComponent', () => {
  let component: PostListItemDetailComponent;
  let fixture: ComponentFixture<PostListItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
