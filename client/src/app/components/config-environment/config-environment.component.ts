import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { ConfigService, Config, Database } from "../../services";
import { ParamMap } from "@angular/router/src/shared";

@Component({
  selector: "app-config-environment",
  templateUrl: "./config-environment.component.html",
  styleUrls: ['./config-environment.component.scss']
})
export class ConfigEnvironmentComponent implements OnInit {
  config: Config = <Config>{
    databases: []
  };
  defaultPathsForm: FormGroup;
  newDatabaseForm: FormGroup;
  addDatabasePanelCollapsed = true;
  unusedDatabases = [
    { label: "NewDatabase1", value: "NewDatabase1" },
    { label: "NewDatabase2", value: "NewDatabase2" }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private configService: ConfigService
  ) {
    this.defaultPathsForm = this.fb.group({
      defaultDataFilePath: new FormControl(this.config.defaultDataFilePath, {
        validators: [Validators.required]
      }),
      defaultLogFilePath: new FormControl(this.config.defaultLogFilePath, {
        validators: [Validators.required]
      })
    });
    this.newDatabaseForm = this.fb.group({
      databaseName: new FormControl('', {
        validators: [Validators.required]
      }),
      overrideDataFilePath: new FormControl('', {
        validators: [Validators.required]
      }),
      overrideLogFilePath: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.configService.getConfig(params.get("environment"))
      )
      .subscribe(config => {
        if (config) {
        this.config = config
        }
      });
  }

  addDatabase() {
    this.addDatabasePanelCollapsed = false;
  }

  saveDatabase() {
    var newDatabase = <Database>{
      databaseName: this.newDatabaseForm.get('databaseName').value,
      overrideDataFilePath: this.newDatabaseForm.get('overrideDataFilePath').value,
      overrideLogFilePath:  this.newDatabaseForm.get('overrideLogFilePath').value
    }
    this.config.databases.push(newDatabase);
    this.addDatabasePanelCollapsed = true;
  }

  saveConfig() {}
}
