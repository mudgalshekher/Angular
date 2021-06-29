import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NectarMapTweetsComponent } from './nectar-map-tweets.component';

describe('NectarMapTweetsComponent', () => {
  let component: NectarMapTweetsComponent;
  let fixture: ComponentFixture<NectarMapTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NectarMapTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NectarMapTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
