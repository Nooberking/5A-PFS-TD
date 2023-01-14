/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenterListComponent } from './center-list.component';

describe('CenterListComponent', () => {
  let component: CenterListComponent;
  let fixture: ComponentFixture<CenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
