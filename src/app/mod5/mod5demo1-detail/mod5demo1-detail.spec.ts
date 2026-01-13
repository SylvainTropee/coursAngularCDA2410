import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod5demo1Detail } from './mod5demo1-detail';

describe('Mod5demo1Detail', () => {
  let component: Mod5demo1Detail;
  let fixture: ComponentFixture<Mod5demo1Detail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod5demo1Detail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod5demo1Detail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
