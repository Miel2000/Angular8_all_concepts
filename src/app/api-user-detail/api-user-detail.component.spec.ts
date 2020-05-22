import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserDetailComponent } from './api-user-detail.component';

describe('ApiUserDetailComponent', () => {
  let component: ApiUserDetailComponent;
  let fixture: ComponentFixture<ApiUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
