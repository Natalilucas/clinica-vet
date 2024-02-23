import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marcacao } from '../models/marcacao';

@Injectable({
  providedIn: 'root'
})
export class MarcacoesService {

  marcacoesUrl = 'http://localhost:3000/marcacoes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Marcacao[]> {
    return this.http.get<Marcacao[]>(this.marcacoesUrl);
  }

  getById(id: string): Observable<Marcacao> {
    return this.http.get<Marcacao>(`${this.marcacoesUrl}/${id}`);
  }

  create(marcacao: Marcacao): Observable<Marcacao> {
    return this.http.post<Marcacao>(this.marcacoesUrl, marcacao);
  }

  update(marcacao: Marcacao): Observable<Marcacao> {
    return this.http.put<Marcacao>(`${this.marcacoesUrl}/${marcacao.id}`, marcacao);
  }

  delete(marcacao: Marcacao): Observable<Marcacao> {
    return this.http.delete<Marcacao>(`${this.marcacoesUrl}/${marcacao.id}`);
  }


}
