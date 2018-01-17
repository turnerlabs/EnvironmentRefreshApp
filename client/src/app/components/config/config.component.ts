import { Component, OnInit } from '@angular/core';
import { Environment, EnvironmentService } from '../../services';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

    environments: Environment[];
    loading = false;

    constructor(private environmentService: EnvironmentService) { }

    ngOnInit() {
      this.loading = true;
        this.environmentService
        .getEnvironments()
        .subscribe(environments => {
          this.environments = environments
          this.loading = false;
        });
    }
}
