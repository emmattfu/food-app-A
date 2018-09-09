import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { SwitchLanguageService } from "../../services/switch-language.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private switchLanguageService: SwitchLanguageService
  ) { }

  ngOnInit() {
    this.switchLanguageService.setDefaultLanguage()
  }


  onLogout () {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
