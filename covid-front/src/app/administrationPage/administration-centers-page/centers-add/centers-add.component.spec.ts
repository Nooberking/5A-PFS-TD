/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CentersAddComponent } from './centers-add.component';

describe('CentersAddComponent', () => {
  let component: CentersAddComponent;
  let fixture: ComponentFixture<CentersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
