import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KanbanBoardService {
  kabanBoardInfos = [
    {
      id: 1,
      name: 'Todo',
      jobs: ['Get to sleep', 'Go home', 'Fall asleep', 'Get to sleep', 'Go home'],
    },
    {
      id: 2,
      name: 'Doing',
      jobs: ['Go home', 'Fall asleep'],
    },
    {
      id: 3,
      name: 'Done',
      jobs: ['Go home'],
    },
  ];

  constructor() {}

  addMainJob(payLoad: any): void {
    this.kabanBoardInfos = [
      ...this.kabanBoardInfos,
      {
        id: 10,
        name: payLoad,
        jobs: [],
      },
    ];
  }

  addNewTask(index: number, newTaskName: string): void {
    this.kabanBoardInfos[index].jobs.push(newTaskName);
  }

  deleteMainJob(index: number): void {
    this.kabanBoardInfos.splice(index, 1);
  }

  deleteTask(indexMainJob: number, indexTask: number): void {
    this.kabanBoardInfos[indexMainJob].jobs.splice(indexTask, 1);
  }
}
