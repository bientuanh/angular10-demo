import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KanbanBoardService } from 'src/app/shared/services/kanban-board/kanban-board.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  constructor(public kanbanBoardService: KanbanBoardService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
