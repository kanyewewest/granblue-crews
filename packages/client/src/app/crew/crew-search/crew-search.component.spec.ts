import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewSearchComponent } from './crew-search.component';

describe('CrewSearchComponent', () => {
  let component: CrewSearchComponent;
  let fixture: ComponentFixture<CrewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
