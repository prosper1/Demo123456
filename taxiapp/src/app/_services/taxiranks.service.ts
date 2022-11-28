import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://ifindtaxi.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class TaxiranksService {

  constructor(
    private http: HttpClient,
  ) { 
    
  }

  search(q: string): Observable<any>{
    return this.http.get(`${apiUrl}ranks/?search=${q}`, httpOptions).pipe(
      tap(_ => console.log('search complete'))
    );
  }

  addDriver(driverObj: object): Observable<any>{
    return this.http.post(apiUrl + 'driver/', driverObj, httpOptions).pipe(
      tap(_ => console.log('added user as driver'))
    );
  }

  addTaxi(taxiObj: object): Observable<any>{
    return this.http.post(apiUrl + 'taxi/', taxiObj, httpOptions).pipe(
      tap(_ => console.log('added taxi'))
    );
  }

  taxis(q: string): Observable<any>{
    return this.http.get(`${apiUrl}taxi/?driver=${q}`, httpOptions).pipe(
      tap(_ => console.log('search complete'))
    );
  }

  upload(formData:any) {
    return this.http.post<any>(`${apiUrl}/cars/use-form/`, formData);
  }

  // Move to its own service
  nearByPlaces(lat: string = '-25.7458176', lng: string = '28.1935872'){
    let newlocation = {
      lat: lat,
      lng: lng
    }
    return this.http.post<any>(apiUrl +'places/',newlocation,httpOptions).pipe(
      tap(_ => console.log('got near'))
    );
  }


  payTaxi(bookingData: object): Observable<any>{
    return this.http.post(`${apiUrl}paid-passengers/`, bookingData, httpOptions).pipe(
      tap(_ => console.log('pay taxi'))
    );
  }

  distance(distanceObj:object){
    return this.http.post<any>(apiUrl +'distance/',distanceObj,httpOptions).pipe(
      tap(_ => console.log('got distance'))
    );
  }

  driverTaxiStatus(): Observable<any>{
    return this.http.get(apiUrl + 'driver-taxi-status/', httpOptions).pipe(
      tap(_ => console.log('get taxi status'))
    );
  }


}
