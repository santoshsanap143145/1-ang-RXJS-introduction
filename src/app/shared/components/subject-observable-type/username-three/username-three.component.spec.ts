import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameThreeComponent } from './username-three.component';

describe('UsernameThreeComponent', () => {
  let component: UsernameThreeComponent;
  let fixture: ComponentFixture<UsernameThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
