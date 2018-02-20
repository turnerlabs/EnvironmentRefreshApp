import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router ) { 

    if(!this.cookieService.check('CookieName', ))
    {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {



  }

}
