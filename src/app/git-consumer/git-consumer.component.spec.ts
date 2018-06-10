import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitConsumerComponent } from './git-consumer.component';

describe('GitConsumerComponent', () => {
  let component: GitConsumerComponent;
  let fixture: ComponentFixture<GitConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
