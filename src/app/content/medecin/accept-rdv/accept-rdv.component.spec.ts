import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRdvComponent } from './accept-rdv.component';

describe('AcceptRdvComponent', () => {
  let component: AcceptRdvComponent;
  let fixture: ComponentFixture<AcceptRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
