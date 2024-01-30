import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import { TransacaoService } from './transacao.service';
import { Transacao } from './transacao';

@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [HttpClientModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})
export class TransacoesComponent {
  
  constructor(private transacaoService: TransacaoService){

  }
  infosTransacoes:string = ""
  
  salvar():void{

    const textareaElement = document.getElementById("infosTransacoes") as HTMLTextAreaElement;

    this.infosTransacoes = textareaElement.value;

    console.log(this.infosTransacoes);
    
    const transacoes:Transacao[] = this.converterStringParaTransacoes(this.infosTransacoes);

    transacoes.forEach((transacao) => {

      this.transacaoService.salvarTransacao(transacao).subscribe(
        ()=>{
          alert("Transação salva Salva!");
          
        },
        (erro)=>{
          console.log(erro);
        }
      )

    });
    
  }

  converterStringParaTransacoes(dadosString: string): Transacao[] {
    const transacoes: Transacao[] = [];
    const partes = dadosString.split(',');
  
    for (let i = 0; i < partes.length; i += 3) {
      const data = partes[i];
      const preco = parseFloat(partes[i + 1]);
      const categoria = partes[i + 2];
  
      const transacao: Transacao = {
        data,
        preco,
        categoria,
      };
  
      transacoes.push(transacao);
    }
    console.log(transacoes)
    return transacoes;
  }

}
