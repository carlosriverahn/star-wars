import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarShipsComponent } from './list-star-ships.component';

describe('ListStarShipsComponent', () => {
  let component: ListStarShipsComponent;
  let fixture: ComponentFixture<ListStarShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStarShipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStarShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
