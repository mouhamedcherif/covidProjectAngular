import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilmedcinComponent } from './profilmedcin.component';

describe('ProfilmedcinComponent', () => {
  let component: ProfilmedcinComponent;
  let fixture: ComponentFixture<ProfilmedcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilmedcinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilmedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
