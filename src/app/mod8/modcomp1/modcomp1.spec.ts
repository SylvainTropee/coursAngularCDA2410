import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modcomp1 } from './modcomp1';

describe('Modcomp1', () => {
  let component: Modcomp1;
  let fixture: ComponentFixture<Modcomp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modcomp1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modcomp1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
