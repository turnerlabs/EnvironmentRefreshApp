import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { Environment } from '../environment/environment';
import { EnvironmentService } from '../environment/environment.service';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

    environments: Environment[];

    constructor(private environmentService: EnvironmentService) { }

    ngOnInit() {
        this.environmentService.getEnvironments().then(environments => this.environments = environments);
    }

}
