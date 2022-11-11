import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleAppsComponent } from './example-apps.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NgxChartDemoComponent } from './ngx-chart-demo/ngx-chart-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleAppsComponent,
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent,
  },
  {
    path: 'kanban-board',
    component: KanbanBoardComponent,
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent,
  },
  {
    path: 'ngx-chart-demo',
    component: NgxChartDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleAppsRoutingModule {}
