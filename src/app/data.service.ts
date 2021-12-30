import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private REST_API_SERVER = "https://desolate-basin-30013.herokuapp.com/api/investments";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    const options = { params: new HttpParams({fromString: "_ville=&_lycee="}) };
    return this.httpClient.get<any>(this.REST_API_SERVER, options).pipe(retry(3), catchError(this.handleError));
  }
}