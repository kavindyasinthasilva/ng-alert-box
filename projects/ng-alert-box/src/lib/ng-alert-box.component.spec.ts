import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAlertBoxComponent } from './ng-alert-box.component';

describe('NgAlertBoxComponent', () => {
  let component: NgAlertBoxComponent;
  let fixture: ComponentFixture<NgAlertBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAlertBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
