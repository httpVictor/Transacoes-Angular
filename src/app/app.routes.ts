import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TabelaConsultaComponent } from './transacoes/tabela-consulta/tabela-consulta.component';
import { TransacoesComponent } from './transacoes/transacoes.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full'  ,component: HomeComponent},
    {path: 'consultar', component: TabelaConsultaComponent},
    {path: 'adicionar', component: TransacoesComponent}
];
