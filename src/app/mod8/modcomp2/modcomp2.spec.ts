import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modcomp2 } from './modcomp2';

describe('Modcomp2', () => {
  let component: Modcomp2;
  let fixture: ComponentFixture<Modcomp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modcomp2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modcomp2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
