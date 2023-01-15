import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationMyCenterPageComponent } from './administration-my-center-page.component';

describe('AdministrationMyCenterPageComponent', () => {
  let component: AdministrationMyCenterPageComponent;
  let fixture: ComponentFixture<AdministrationMyCenterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationMyCenterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationMyCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
