import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmothequeComponent } from './filmotheque.component';

describe('FilmothequeComponent', () => {
  let component: FilmothequeComponent;
  let fixture: ComponentFixture<FilmothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmothequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
