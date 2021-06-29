import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NectarMapTwitterComponent } from './nectar-map-twitter.component';

describe('NectarMapTwitterComponent', () => {
  let component: NectarMapTwitterComponent;
  let fixture: ComponentFixture<NectarMapTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NectarMapTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NectarMapTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
