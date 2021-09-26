import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livro } from '../entities/livro';
@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private url = "http://localhost:3000/livros"
  constructor(private http:HttpClient) { }

  listar():Observable<Livro[]>{
    return this.http.get<Livro[]>(this.url)
  }
}
