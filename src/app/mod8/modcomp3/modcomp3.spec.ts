import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modcomp3 } from './modcomp3';

describe('Modcomp3', () => {
  let component: Modcomp3;
  let fixture: ComponentFixture<Modcomp3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modcomp3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modcomp3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
