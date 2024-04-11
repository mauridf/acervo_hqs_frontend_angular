import { Editoras } from './../models/editora';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44305/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getEditoras (): Observable<Editoras[]> {
    const url = `${apiUrl}/editora`
    return this.http.get<Editoras[]>(url)
      .pipe(
        tap(produtos => console.log('leu as editoras')),
        catchError(this.handleError('getEditoras', []))
      );
  }

  getEditora(id: number): Observable<Editoras> {
    const url = `${apiUrl}/editora/${id}`;
    return this.http.get<Editoras>(url).pipe(
      tap(_ => console.log(`leu a Editora id=${id}`)),
      catchError(this.handleError<Editoras>(`getEditora id=${id}`))
    );
  }

  addEditora (editora: any): Observable<Editoras> {
    const url = `${apiUrl}/editora`
    return this.http.post<Editoras>(url, editora, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((editora: Editoras) => console.log(`adicionou a editora com w/ id=${editora.idEditora}`)),
      catchError(this.handleError<Editoras>('addEditora'))
    );
  }

  updateEditora(id: any, editora: any): Observable<any> {
    const url = `${apiUrl}/editora/${id}`;
    return this.http.put(url, editora, httpOptions).pipe(
      tap(_ => console.log(`atualiza a editora com id=${id}`)),
      catchError(this.handleError<any>('updateEditora'))
    );
  }

  deleteEditora (id: any): Observable<Editoras> {
    const url = `${apiUrl}/editora/${id}`;

    return this.http.delete<Editoras>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a editora com id=${id}`)),
      catchError(this.handleError<Editoras>('deleteEditora'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
