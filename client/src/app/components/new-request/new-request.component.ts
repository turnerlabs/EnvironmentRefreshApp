import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { NewRequestService,NewRequest } from "../../services";

@Component({
  selector: 'app-newrequest',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
  newRequest: NewRequest = <NewRequest>{
  
  };
  newRequestForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private newRequestService: NewRequestService
  ) {
    this.newRequestForm = this.fb.group({
      requestName: new FormControl(this.newRequest.requestName, {
        validators: [Validators.required]
      }),
      requestDescription: new FormControl(this.newRequest.requestDescription, {
        validators: [Validators.required]
      })
    });   
  }
  
  ngOnInit() {
  }

  submitRequest() {
      this.newRequest.requestName = this.newRequestForm.get('requestName').value;
      this.newRequest.requestDescription  = this.newRequestForm.get('requestDescription').value;
      this.newRequestService.setData(this.newRequest);
      this.newRequestService.saveRequestData(); 
      console.log(this.newRequest.requestName); 
      this.newRequestForm.reset();   
  }
}
