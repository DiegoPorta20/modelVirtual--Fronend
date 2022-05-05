import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLoginComponent } from './is-login.component';

describe('IsLoginComponent', () => {
  let component: IsLoginComponent;
  let fixture: ComponentFixture<IsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
