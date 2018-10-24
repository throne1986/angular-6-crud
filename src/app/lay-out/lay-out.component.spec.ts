import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutComponent } from './lay-out.component';

describe('LayOutComponent', () => {
  let component: LayOutComponent;
  let fixture: ComponentFixture<LayOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
