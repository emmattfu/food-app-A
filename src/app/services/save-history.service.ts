import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class SaveHistoryService {
  private historySourse = new BehaviorSubject(false);
  public  historyState = this.historySourse.asObservable()

  constructor() { }

  toggleHistoryState(state: boolean) {
    this.historySourse.next(state)
  }
}
