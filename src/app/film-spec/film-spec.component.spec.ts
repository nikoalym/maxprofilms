import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSpecComponent } from './film-spec.component';

describe('FilmSpecComponent', () => {
  let component: FilmSpecComponent;
  let fixture: ComponentFixture<FilmSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
