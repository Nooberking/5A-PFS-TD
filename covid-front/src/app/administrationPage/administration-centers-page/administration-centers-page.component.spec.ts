import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationCentersPageComponent } from './administration-centers-page.component';

describe('AdministrationCentersPageComponent', () => {
  let component: AdministrationCentersPageComponent;
  let fixture: ComponentFixture<AdministrationCentersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationCentersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationCentersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
