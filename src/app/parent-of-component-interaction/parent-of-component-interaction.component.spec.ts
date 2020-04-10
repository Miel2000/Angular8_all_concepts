import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfComponentInteractionComponent } from './parent-of-component-interaction.component';

describe('ParentOfComponentInteractionComponent', () => {
  let component: ParentOfComponentInteractionComponent;
  let fixture: ComponentFixture<ParentOfComponentInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentOfComponentInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOfComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
