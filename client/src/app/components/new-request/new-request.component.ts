import { Component, OnInit } from '@angular/core';
import { EnvironmentService, Environment, RefreshRequest, RefreshRequestService, RefreshRequestSystem } from '../../services';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BoundDirectivePropertyAst } from '@angular/compiler';
import { Router } from '@angular/router';

/**
 * Component that provides new request functionality
 * @export
 * @class NewRequestComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-newrequest',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  public environments: Observable<Array<Environment>>;
  public requestors: Observable<Array<string>>;
  public systems: Array<RefreshRequestSystem>;
  public submitRequestFormGroup: FormGroup;
  public userId: string;

  private totalRequests: number;
  private selectedSystems: Array<RefreshRequestSystem>;

  /**
   * Creates an instance of NewRequestComponent.
   * @param {FormBuilder} formBuilder
   * @param {EnvironmentService} environmentService
   * @param {RefreshRequestService} requestRefreshService
   * @memberof NewRequestComponent
   */
  constructor(private formBuilder: FormBuilder,
              private environmentService: EnvironmentService,
              private requestRefreshService: RefreshRequestService,
              private router: Router) {
    this.submitRequestFormGroup = this.formBuilder.group({
      environment: ['', Validators.required],
      requestor: ['', Validators.required]
    });
    this.selectedSystems = new Array<RefreshRequestSystem>();
    // NOTE: this value will be the users logged in AD id
    this.userId = 'Admin';
  }

  /**
   * Adds or removes a system from the list
   * @param {*} system
   * @memberof NewRequestComponent
   */
  public addRemoveSystem(system: any):  void {
    const index = this.selectedSystems.findIndex(p => p.systemName === system.systemName);
    if ( index !== -1 ) {
      this.selectedSystems.splice(index, 1);
    } else {
      this.selectedSystems.push(system);
    }
  }

  /**
   * Bootstrap init method
   * @memberof NewRequestComponent
   */
  ngOnInit() {
    // Load initial data
    this.requestors = this.requestRefreshService.getSystemUsers();
    this.environments = this.environmentService.getEnvironments();
    this.requestRefreshService.getSystems().subscribe(results => {
      this.systems = results;
    });
    this.requestRefreshService.getRequests().subscribe(rs => {
      this.totalRequests = rs.length;
    });
  }

  /**
   * Generates a new refresh request object
   * @private
   * @returns {RefreshRequest}
   * @memberof NewRequestComponent
   */
  private createSubmitRequest(): RefreshRequest {
    const newRefreshRequest = <RefreshRequest>{};
    newRefreshRequest.id = String(this.totalRequests + 1);
    newRefreshRequest.environment = this.submitRequestFormGroup.value.environment;
    newRefreshRequest.requestor = this.submitRequestFormGroup.value.requestor;
    newRefreshRequest.scheduleDate = new Date();
    newRefreshRequest.status = 'Scheduled';
    newRefreshRequest.systems = this.selectedSystems;
    newRefreshRequest.scheduledBy = this.userId;
    return newRefreshRequest;
  }

  /**
   * Submits a new request
   * @memberof NewRequestComponent
   */
  public submitRequest() {
    const refreshRequest = this.createSubmitRequest();
    this.requestRefreshService.submitRequest(refreshRequest).subscribe(result => {
      this.router.navigate(['/requests']);
    });
  }

  /**
   * Resets the state of the form to allow new entry
   * @private
   * @memberof NewRequestComponent
   */
  private resetForm(): void {
    this.submitRequestFormGroup.reset();
    this.selectedSystems = new Array<RefreshRequestSystem>();
  }
}
