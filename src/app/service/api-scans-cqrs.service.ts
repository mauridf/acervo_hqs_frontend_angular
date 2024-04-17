import { Editoras } from './../models/editora';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Personagens } from '../models/personagem';
import { Hqs } from '../models/hqs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5107/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  //EDITORA
  getEditoras (): Observable<Editoras[]> {
    const url = `${apiUrl}/Editora/ObterTodasEditoras`
    return this.http.get<Editoras[]>(url)
      .pipe(
        tap(editoras => console.log('leu as editoras')),
        catchError(this.handleError('getEditoras', []))
      );
  }

  getEditora(id: number): Observable<Editoras> {
    const url = `${apiUrl}/Editora/ObterEditoraPorId/${id}`;
    return this.http.get<Editoras>(url).pipe(
      tap(_ => console.log(`leu a Editora id=${id}`)),
      catchError(this.handleError<Editoras>(`getEditora id=${id}`))
    );
  }

  addEditora (editora: any): Observable<Editoras> {
    const url = `${apiUrl}/Editora/CriarEditora`
    return this.http.post<Editoras>(url, editora, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((editora: Editoras) => console.log(`adicionou a editora com w/ id=${editora.id}`)),
      catchError(this.handleError<Editoras>('addEditora'))
    );
  }

  updateEditora(id: any, editora: any): Observable<any> {
    const url = `${apiUrl}/Editora/AtualizarEditora/${id}`;
    return this.http.put(url, editora, httpOptions).pipe(
      tap(_ => console.log(`atualiza a editora com id=${id}`)),
      catchError(this.handleError<any>('updateEditora'))
    );
  }

  deleteEditora (id: any): Observable<Editoras> {
    const url = `${apiUrl}/Editora/DeletarEditora/${id}`;

    return this.http.delete<Editoras>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a editora com id=${id}`)),
      catchError(this.handleError<Editoras>('deleteEditora'))
    );
  }

  //PERSONAGEM
  getPersonagens (): Observable<Personagens[]> {
    const url = `${apiUrl}/Personagem/ObterTodosPersonagens`
    return this.http.get<Personagens[]>(url)
      .pipe(
        tap(personagens => console.log('leu os personagens')),
        catchError(this.handleError('getPersonagens', []))
      );
  }

  getPersonagem(id: number): Observable<Personagens> {
    const url = `${apiUrl}/Personagem/ObterPersonagemPorId/${id}`;
    return this.http.get<Personagens>(url).pipe(
      tap(_ => console.log(`leu o Personagem id=${id}`)),
      catchError(this.handleError<Personagens>(`getPersonagem id=${id}`))
    );
  }

  addPersonagem (personagem: any): Observable<Personagens> {
    const url = `${apiUrl}/Personagem/CriarPersonagem`
    return this.http.post<Personagens>(url, personagem, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((personagem: Personagens) => console.log(`adicionou o Personagem com w/ id=${personagem.id}`)),
      catchError(this.handleError<Personagens>('addPersonagem'))
    );
  }

  updatePersonagem(id: any, personagem: any): Observable<any> {
    const url = `${apiUrl}/Personagem/AtualizarPersonagem/${id}`;
    return this.http.put(url, personagem, httpOptions).pipe(
      tap(_ => console.log(`atualiza o personagem com id=${id}`)),
      catchError(this.handleError<any>('updatePersonagem'))
    );
  }

  deletePersonagem (id: any): Observable<Personagens> {
    const url = `${apiUrl}/Personagem/DeletarPersonagem/${id}`;

    return this.http.delete<Personagens>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o personagem com id=${id}`)),
      catchError(this.handleError<Personagens>('deletePersonagem'))
    );
  }

  //HQ
  getHqs (): Observable<Hqs[]> {
    const url = `${apiUrl}/Hq/ObterTodasHqs`
    return this.http.get<Hqs[]>(url)
      .pipe(
        tap(hqs => console.log('leu as hqs')),
        catchError(this.handleError('getHqs', []))
      );
  }

  getHq(id: number): Observable<Hqs> {
    const url = `${apiUrl}/Hq/ObterHqPorId/${id}`;
    return this.http.get<Hqs>(url).pipe(
      tap(_ => console.log(`leu a Hq id=${id}`)),
      catchError(this.handleError<Hqs>(`getHq id=${id}`))
    );
  }

  addHq (hq: any): Observable<Hqs> {
    const url = `${apiUrl}/Hq/CriarHq`
    return this.http.post<Hqs>(url, hq, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((hq: Hqs) => console.log(`adicionou a Hq com w/ id=${hq.id}`)),
      catchError(this.handleError<Hqs>('addHq'))
    );
  }

  updateHq(id: any, hq: any): Observable<any> {
    const url = `${apiUrl}/Hq/AtualizarHq/${id}`;
    return this.http.put(url, hq, httpOptions).pipe(
      tap(_ => console.log(`atualiza a hq com id=${id}`)),
      catchError(this.handleError<any>('updateHq'))
    );
  }

  deleteHq (id: any): Observable<Hqs> {
    const url = `${apiUrl}/Hq/DeletarHq/${id}`;

    return this.http.delete<Hqs>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a hq com id=${id}`)),
      catchError(this.handleError<Hqs>('deleteHq'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
