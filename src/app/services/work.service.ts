import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environments } from '../environments';
import { Work } from '../interfaces/work.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private readonly baseUrl:string = environments.baseUrl;

  private handleError(error:HttpErrorResponse) {
    if (error.status === 0) {
      console.log('Ocurrió un error: ', error.error);
    } else {
      console.log(`El backend devolvió el código ${error.status}:, el cuerpo era ${error.error}`);
    }

    return throwError(() => new Error('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.'));
  }

  constructor(private http: HttpClient) { }

  getAbout():Observable<Work[]> {
    return this.http.get<Work[]>(`${this.baseUrl}/work`, httpOptions).pipe(catchError(this.handleError));
  }
}
