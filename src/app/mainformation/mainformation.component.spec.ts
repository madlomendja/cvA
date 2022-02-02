import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainformationComponent } from './mainformation.component';

describe('MainformationComponent', () => {
  let component: MainformationComponent;
  let fixture: ComponentFixture<MainformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
