import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrealisationsComponent } from './mainrealisations.component';

describe('MainrealisationsComponent', () => {
  let component: MainrealisationsComponent;
  let fixture: ComponentFixture<MainrealisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainrealisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainrealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
