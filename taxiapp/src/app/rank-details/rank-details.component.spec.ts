import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankDetailsComponent } from './rank-details.component';

describe('RankDetailsComponent', () => {
  let component: RankDetailsComponent;
  let fixture: ComponentFixture<RankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
