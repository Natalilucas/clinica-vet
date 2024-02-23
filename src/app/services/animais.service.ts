import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marcacao } from '../models/marcacao';
import { Animais } from '../models/animais';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  animaisUrl = 'http://localhost:3000/animais';

  constructor(private http: HttpClient) { }


    getAll(): Observable<Animais[]> {
      return this.http.get<Animais[]>(this.animaisUrl);
    }

    getById(id: string): Observable<Animais> {
      return this.http.get<Animais>(`${this.animaisUrl}/${id}`)
    }

    //falta [] dentro do <Marcacao>
    create(animais: Animais): Observable<Animais>{
      return this.http.post<Animais>(this.animaisUrl, animais)
    }

    update(animais: Animais): Observable<Animais>{
      return this.http.put<Animais>(`${this.animaisUrl}/${animais.id}`, animais)
    }

    delete(animais: Animais): Observable<Animais>{
      return this.http.delete<Animais>(`${this.animaisUrl}/${animais.id}`)
    }

}
