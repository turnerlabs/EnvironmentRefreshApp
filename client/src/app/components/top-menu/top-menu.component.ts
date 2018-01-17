import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  template: '<header><ng-content></ng-content></header>',
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent {
}
