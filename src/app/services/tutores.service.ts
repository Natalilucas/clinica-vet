import { Tutores } from './../models/tutores';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TutoresService {

  TutoresUrrl = 'http://localhost:3000/marcacoes';

  constructor(private http: HttpClient) { }


    getAll(): Observable<Tutores[]> {
      return this.http.get<Tutores[]>(this.TutoresUrrl);
    }

    getById(id: string): Observable<Tutores> {
      return this.http.get<Tutores>(`${this.TutoresUrrl}/${id}`)
    }

    create(Tutores: Tutores): Observable<Tutores>{
      return this.http.post<Tutores>(this.TutoresUrrl, Tutores)
    }

    update(Tutores: Tutores): Observable<Tutores>{
      return this.http.put<Tutores>(`${this.TutoresUrrl}/${Tutores.id}`, Tutores)
    }

    delete(Tutores: Tutores): Observable<Tutores>{
      return this.http.delete<Tutores>(`${this.TutoresUrrl}/${Tutores.id}`)
    }

}
