import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnChanges {
  @Input('result') searchResult;
  constructor() { }

  ngOnChanges() {
    console.log(this.searchResult);
  }

}
