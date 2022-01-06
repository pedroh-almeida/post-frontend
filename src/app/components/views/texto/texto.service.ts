
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Texto } from './texto.model';

@Injectable({
  providedIn: 'root'
})
export class TextoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Texto[]> {
    const url = `${this.baseUrl}/textos`

    return this.http.get<Texto[]>(url)
  }

  findById(id: String): Observable<Texto> {
    const url = `${this.baseUrl}/textos/${id}`

    return this.http.get<Texto>(url)
  }

  craete(texto: Texto): Observable<Texto>{
    const url = `${this.baseUrl}/textos`

    return this.http.post<Texto>(url, texto);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/textos/${id}`

    return this.http.delete<void>(url)
  }

  menssagem(str: String): void {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
