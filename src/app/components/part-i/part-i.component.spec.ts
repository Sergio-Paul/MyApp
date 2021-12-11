import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartIComponent } from './part-i.component';

describe('PartIComponent', () => {
  let component: PartIComponent;
  let fixture: ComponentFixture<PartIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
