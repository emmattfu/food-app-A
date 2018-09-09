import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class SwitchLanguageService {

  constructor(
    private translateService: TranslateService
  ) {
  }

  setDefaultLanguage() {
    this.translateService.setDefaultLang(localStorage.getItem('lang' || 'ru'));
  }

  switchLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
  }
}
