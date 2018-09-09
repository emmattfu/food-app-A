import { Component, OnInit } from '@angular/core';
import { SaveHistoryService } from "../../services/save-history.service";
import { SwitchLanguageService } from "../../services/switch-language.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  historyState:boolean = false;

  constructor(
    private saveHistoryService: SaveHistoryService,
    private switchLanguageService: SwitchLanguageService
  ) { }

  ngOnInit() {

  }

  toggleHistoryState() {
    this.saveHistoryService.toggleHistoryState(this.historyState);
  }

  switchLanguage(lang: string) {
    this.switchLanguageService.switchLanguage(lang);
  }
}
