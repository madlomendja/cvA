import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincompetenceComponent } from './maincompetence.component';

describe('MaincompetenceComponent', () => {
  let component: MaincompetenceComponent;
  let fixture: ComponentFixture<MaincompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
