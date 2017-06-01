import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    activeMenuId: string;
    themesVisible = false;
    mobileMenuActive = false;

    toggleMenu(e) {
        this.mobileMenuActive = !this.mobileMenuActive;
        e.preventDefault();
    }
}
