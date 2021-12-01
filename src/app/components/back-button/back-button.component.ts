import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.less']
})
export class BackButtonComponent {

  public backButtonText = "Back";
  constructor(private location: Location, private router: Router) { }

  public onBack(): void {
    this.location.back()
  }

  public get showBackButton(): boolean {
    return this.router.url !== '/';
  }

}
