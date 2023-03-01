import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowColumnComponent } from './row-column.component';

describe('RowColumnComponent', () => {
  let component: RowColumnComponent;
  let fixture: ComponentFixture<RowColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
