import { Component } from '@angular/core';
import { TransacaoService } from '../transacao.service';
import { Transacao } from '../transacao';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tabela-consulta',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './tabela-consulta.component.html',
  styleUrl: './tabela-consulta.component.scss'
})
export class TabelaConsultaComponent {

  //Lista que vai armazenar as informações que vierem da API
  transacoes:Transacao[] = [];

  transacaoSelecionada:Transacao = new Transacao

  constructor(private transacaoService: TransacaoService){

  }

  ngOnInit(): void {
    this.obterTransacoes();
  }

  obterTransacoes(){
    this.transacaoService.buscarTransacao().subscribe(
      (resposta) => {
        console.log(resposta);
        this.transacoes = resposta;
      },
      (erro)=> {
        console.log(erro);
      },
      ()=> {
      }
    )
  }

  selecionar(transacao:Transacao): void{
    this.transacaoSelecionada = transacao;
  }

  apagarTransacao(id?:number|null): void{
    this.transacaoService.deletarTransacao(id!).subscribe(
      ()=> {
        alert("Transação apagada com sucesso!"); 
        this.obterTransacoes();
      },
      (erro) => {console.log(erro)}
    );
  }

}
