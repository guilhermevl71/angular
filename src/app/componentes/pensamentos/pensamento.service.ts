import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> { /* espera receber um parametro que seja do tipo pensamento(a interface criada) */
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}` /* é preciso desse const url pq para deletar é atraves do id, e a url da API é a base com tudo no caso, então é preciso ter localhost:3000/pensamentos/id e pra isso cria a url com isso, daria pra colocar ja direto dentro do delete */
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
