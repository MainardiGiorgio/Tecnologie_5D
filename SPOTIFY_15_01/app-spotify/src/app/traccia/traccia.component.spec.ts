import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracciaComponent } from './traccia.component';

describe('TracciaComponent', () => {
  let component: TracciaComponent;
  let fixture: ComponentFixture<TracciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TracciaComponent]
    });
    fixture = TestBed.createComponent(TracciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
