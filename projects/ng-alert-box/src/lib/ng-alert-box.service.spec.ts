import { TestBed } from '@angular/core/testing';

import { NgAlertBoxService } from './ng-alert-box.service';

describe('NgAlertBoxService', () => {
  let service: NgAlertBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAlertBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
