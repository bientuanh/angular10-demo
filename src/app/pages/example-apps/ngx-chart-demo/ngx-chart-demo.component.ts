import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { multi1 } from './data';

@Component({
  selector: 'app-ngx-chart-demo',
  templateUrl: './ngx-chart-demo.component.html',
  styleUrls: ['./ngx-chart-demo.component.scss'],
})
export class NgxChartDemoComponent implements OnInit {
  single: any[];
  multi: any[];
  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  multi1: any[];
  view1: any[] = [700, 300];
  // options
  legend1 = true;
  showLabels1 = true;
  animations1 = true;
  xAxis1 = true;
  yAxis1 = true;
  showYAxisLabel1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Year';
  yAxisLabel1 = 'Population';
  timeline1 = true;
  colorScheme1 = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  saleData = [
    { name: 'Mobiles', value: 105000 },
    { name: 'Laptop', value: 55000 },
    { name: 'AC', value: 15000 },
    { name: 'Headset', value: 150000 },
    { name: 'Fridge', value: 20000 },
  ];

  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { multi1 });
  }

  ngOnInit(): void {}

  onSelectVerticalBarChart(event): void {
    console.log(event);
  }

  onSelectLineChart(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivateLineChart(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivateLineChart(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
