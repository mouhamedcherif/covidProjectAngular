import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhopitalComponent } from './addhopital.component';

describe('AddhopitalComponent', () => {
  let component: AddhopitalComponent;
  let fixture: ComponentFixture<AddhopitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhopitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
