import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders  } from '@angular/common/http';
import { NewRequest } from './new-request'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NewRequestService {

  constructor( private http: HttpClient) { }
  
  private request: NewRequest;

  public setData(newRequest: NewRequest )
  {
    this.request = newRequest;
  }

  public getData(): NewRequest
  {
    return this.request;
  }

  saveRequestData()
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    let res;
      console.log("POST");
      let url = '/api/newrequest';
      console.log(JSON.stringify(this.getData()));      
      this.http.post(url, JSON.stringify(this.getData()), httpOptions).subscribe(
        data => { console.log(data) } ,
        error => {
          console.error("Error saving new request");
        }
      );      
  }
}
