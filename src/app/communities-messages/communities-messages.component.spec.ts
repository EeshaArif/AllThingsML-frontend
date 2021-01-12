import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesMessagesComponent } from './communities-messages.component';

describe('CommunitiesMessagesComponent', () => {
  let component: CommunitiesMessagesComponent;
  let fixture: ComponentFixture<CommunitiesMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitiesMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
