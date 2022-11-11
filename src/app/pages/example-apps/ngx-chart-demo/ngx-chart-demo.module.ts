import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartDemoComponent } from './ngx-chart-demo.component';

@NgModule({
  imports: [CommonModule, NgxChartsModule],
  exports: [],
  declarations: [NgxChartDemoComponent],
})
export class NgxChartDemoModule {}
