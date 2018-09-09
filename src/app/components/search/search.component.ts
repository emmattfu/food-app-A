import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SearchService } from "../../services/search.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/index";
import { map, startWith } from "rxjs/operators";
import { DishPreview } from "../../models/DishPreview";
import { SearchHistory } from "../../models/SearchHistory";
import { SaveHistoryService } from "../../services/save-history.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  saveSearch = false;
  searchHistory = [];
  filteredOptions: Observable<string[]>;

  @Output() getData: EventEmitter<any[]> = new EventEmitter();
  constructor(
    private searchService: SearchService,
    private saveHistoryService: SaveHistoryService
  ) { }

  ngOnInit() {
    this.searchService.getSearchHistory().subscribe(res => this.searchHistory = res);
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.saveHistoryService.historyState.subscribe(state => this.saveSearch = state)
  }

  onSearch() {
    if (this.saveSearch) {
      this.searchService.saveSearchHistory(this.searchControl.value);
    }
    this.searchService.searchRecipe(this.searchControl.value).subscribe((res: DishPreview[]) => {
      this.getData.emit(res);
    });
    this.searchControl.setValue('');
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.searchHistory.filter(item => item.name.toLowerCase().includes(filterValue));
  }
}
