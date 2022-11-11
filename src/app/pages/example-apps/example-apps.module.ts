import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';
import { ExampleAppsRoutingModule } from './example-apps-routing.module';
import { KanbanBoardModule } from './kanban-board/kanban-board.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { NgxChartDemoModule } from './ngx-chart-demo/ngx-chart-demo.module';

import { ExampleAppsComponent } from './example-apps.component';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi-VN');

@NgModule({
  declarations: [ExampleAppsComponent],
  imports: [
    CommonModule,
    ExampleAppsRoutingModule,
    ShoppingCardModule,
    KanbanBoardModule,
    DynamicFormModule,
    NgxChartDemoModule,
  ],
})
export class ExampleAppsModule {}
