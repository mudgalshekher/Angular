import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NectarChartComponent } from './nectar-chart.component';

describe('NectarChartComponent', () => {
  let component: NectarChartComponent;
  let fixture: ComponentFixture<NectarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NectarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NectarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
