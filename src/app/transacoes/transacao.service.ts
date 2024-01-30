import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from './transacao';

@Injectable({
  providedIn: 'root'
})

export class TransacaoService {

  constructor(private http:HttpClient ) { }

  private url = 'http://localhost:8080/transacao';

  public buscarTransacao():Observable<Transacao[]>{
    return this.http.get<Transacao[]>(this.url);
  }

  public deletarTransacao(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"?id="+id);
  }

  public salvarTransacao(transacao:Transacao):Observable<any>{
    return this.http.post<any>(this.url, transacao);
  }

  public alterarTransacao(transacao:Transacao):Observable<any>{
    return this.http.put<any>(this.url, transacao);
  }
}
