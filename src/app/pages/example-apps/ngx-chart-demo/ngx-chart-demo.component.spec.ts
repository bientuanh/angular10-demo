import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartDemoComponent } from './ngx-chart-demo.component';

describe('NgxChartDemoComponent', () => {
  let component: NgxChartDemoComponent;
  let fixture: ComponentFixture<NgxChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxChartDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
