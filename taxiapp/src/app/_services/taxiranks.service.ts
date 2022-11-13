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


  cars(
    carFilters = {
    name: '',
    brand: '',
    color: '',
    category: '',
    startDate: '',
    endDate:'',
    minPrice: '',
    maxPrice: '',
    city: '',
    owner: ''


  }): Observable<any> {
    
    console.log(carFilters.category)
    if (carFilters.category.length > 0){
      return this.http.get(
        `${apiUrl}/cars/list/?name=${carFilters.name}&brand=${carFilters.brand}&is_verified=&color=${carFilters.color}&category=${carFilters.category}&bookings__start_date__gte=${carFilters.startDate}&bookings__start_date__lte=&bookings__end_date__gte=&bookings__end_date__lte=${carFilters.endDate}&price__gte=${carFilters.minPrice}&price__lte=${carFilters.maxPrice}&city=${carFilters.city}&owner=${carFilters.owner}`, httpOptions).pipe(
        tap(_ => console.log('fetch products'))
      );
    }
    else {
      return this.http.get(
        `${apiUrl}/cars/list/?name=${carFilters.name}&brand=${carFilters.brand}&is_verified=&color=${carFilters.color}&bookings__start_date__gte=${carFilters.startDate}&bookings__start_date__lte=&bookings__end_date__gte=&bookings__end_date__lte=${carFilters.endDate}&price__gte=${carFilters.minPrice}&price__lte=${carFilters.maxPrice}&city=${carFilters.city}&owner=${carFilters.owner}`, httpOptions).pipe(
        tap(_ => console.log('fetch products'))
      );
    }
    
  }

  carDetails(productID: any): Observable<any> {
    return this.http.get(apiUrl + '/cars/list/' + productID + '/', httpOptions).pipe(
      tap(_ => console.log('detailed'))
    );
  }

  search(q: string): Observable<any>{
    return this.http.get(`${apiUrl}ranks/?search=${q}`, httpOptions).pipe(
      tap(_ => console.log('search complete'))
    );
  }

  addDriver(car: object): Observable<any>{
    return this.http.post(apiUrl + '/cars/add-car/', car, httpOptions).pipe(
      tap(_ => console.log('added car'))
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
    return this.http.post<any>(apiUrl +'/cars/places/',newlocation,httpOptions).pipe(
      tap(_ => console.log('got near'))
    );
  }


  payTaxi(bookingData: object): Observable<any>{
    return this.http.post(`${apiUrl}/cars/add-booking/`, bookingData, httpOptions).pipe(
      tap(_ => console.log('added car'))
    );
  }

  bookings(userId: string, ownerId: string): Observable<any> {
    return this.http.get(`${apiUrl}/cars/bookings/?booking_user=${userId}&car__owner=${ownerId}`, httpOptions).pipe(
      tap(_ => console.log('fetch products'))
    );
  }

  newsletter(newsletter: object): Observable<any>{
    return this.http.post(`${apiUrl}/cars/policy-and-newsletter/`, newsletter, httpOptions).pipe(
      tap(_ => console.log('added car'))
    );
  }


}
