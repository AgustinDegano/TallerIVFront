import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmHorariosComponent } from './abm-horarios.component';

describe('AbmHorariosComponent', () => {
  let component: AbmHorariosComponent;
  let fixture: ComponentFixture<AbmHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbmHorariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
