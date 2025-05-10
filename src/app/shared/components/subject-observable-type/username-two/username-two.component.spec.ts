import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameTwoComponent } from './username-two.component';

describe('UsernameTwoComponent', () => {
  let component: UsernameTwoComponent;
  let fixture: ComponentFixture<UsernameTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
