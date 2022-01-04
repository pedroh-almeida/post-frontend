
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Texto } from './texto.model';

@Injectable({
  providedIn: 'root'
})
export class TextoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Texto[]> {
    const url = `${this.baseUrl}/textos`

    return this.http.get<Texto[]>(url)
  }
}
