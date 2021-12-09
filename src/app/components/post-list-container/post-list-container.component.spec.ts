import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListContainerComponent } from './post-list-container.component';

describe('PostListContainerComponent', () => {
  let component: PostListContainerComponent;
  let fixture: ComponentFixture<PostListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
