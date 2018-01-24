import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.scss']
})
export class NavMenuComponent {
    
    cookieValue = 'UNKNOWN';
    constructor(private cookieService: CookieService ) {
        this.cookieValue = this.cookieService.get('CookieName');
    }
}
