/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenterItemComponent } from './center-item.component';

describe('CenterItemComponent', () => {
  let component: CenterItemComponent;
  let fixture: ComponentFixture<CenterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
