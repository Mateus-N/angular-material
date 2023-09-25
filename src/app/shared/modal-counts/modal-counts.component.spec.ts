import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCountsComponent } from './modal-counts.component';

describe('ModalCountsComponent', () => {
  let component: ModalCountsComponent;
  let fixture: ComponentFixture<ModalCountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCountsComponent]
    });
    fixture = TestBed.createComponent(ModalCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
