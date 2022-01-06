import { Voto } from './voto.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotoService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByTexto(id_texto: String): Observable<Voto[]> {
    const url = `${this.baseUrl}/votos?texto=${id_texto}`
    return this.http.get<Voto[]>(url)
  }
}
