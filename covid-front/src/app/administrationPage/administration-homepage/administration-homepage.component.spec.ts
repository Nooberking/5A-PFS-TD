import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationHomepageComponent } from './administration-homepage.component';

describe('AdministrationHomepageComponent', () => {
  let component: AdministrationHomepageComponent;
  let fixture: ComponentFixture<AdministrationHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
