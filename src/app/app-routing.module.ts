import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EdicoesComponent } from './edicao/edicoes/edicoes.component';
import { EdicoesDetalheComponent } from './edicao/edicoes-detalhe/edicoes-detalhe.component';
import { EdicoesNovoComponent } from './edicao/edicoes-novo/edicoes-novo.component';
import { EdicoesEditarComponent } from './edicao/edicoes-editar/edicoes-editar.component';

import { EditorasComponent } from './editora/editoras/editoras.component';
import { EditorasDetalheComponent } from './editora/editoras-detalhe/editoras-detalhe.component';
import { EditorasNovoComponent } from './editora/editoras-novo/editoras-novo.component';
import { EditorasEditarComponent } from './editora/editoras-editar/editoras-editar.component';

import { PersonagensComponent } from './personagem/personagens/personagens.component';
import { PersonagensDetalheComponent } from './personagem/personagens-detalhe/personagens-detalhe.component';
import { PersonagensNovoComponent } from './personagem/personagens-novo/personagens-novo.component';
import { PersonagensEditarComponent } from './personagem/personagens-editar/personagens-editar.component';

import { HqsComponent } from './hq/hqs/hqs.component';
import { HqsDetalheComponent } from './hq/hqs-detalhe/hqs-detalhe.component';
import { HqsNovoComponent } from './hq/hqs-novo/hqs-novo.component';
import { HqsEditarComponent } from './hq/hqs-editar/hqs-editar.component';

const routes: Routes = [
  {
    path: 'edicoes',
    component: EdicoesComponent,
    data: { title: 'Edições' }
  },
  {
    path: 'edicoes-detalhe/:id',
    component: EdicoesDetalheComponent,
    data: { title: 'Detalhe da Edição' }
  },
  {
    path: 'edicoes-novo',
    component: EdicoesNovoComponent,
    data: { title: 'Adicionar Edição' }
  },
  {
    path: 'edicoes-editar/:id',
    component: EdicoesEditarComponent,
    data: { title: 'Editar Edição' }
  },
  // { path: '',
  //   redirectTo: '/edicoes',
  //   pathMatch: 'full'
  // },
  {
    path: 'editoras',
    component: EditorasComponent,
    data: { title: 'Lista de Editoras' }
  },
  {
    path: 'editoras-detalhe/:id',
    component: EditorasDetalheComponent,
    data: { title: 'Detalhe da Editora' }
  },
  {
    path: 'editoras-novo',
    component: EditorasNovoComponent,
    data: { title: 'Adicionar Editora' }
  },
  {
    path: 'editoras-editar/:id',
    component: EditorasEditarComponent,
    data: { title: 'Editar a Editora' }
  },
  // { path: '',
  //   redirectTo: '/editoras',
  //   pathMatch: 'full'
  // },
  {
    path: 'personagens',
    component: PersonagensComponent,
    data: { title: 'Personagens' }
  },
  {
    path: 'personagens-detalhe/:id',
    component: PersonagensDetalheComponent,
    data: { title: 'Detalhe do(a) Personagem' }
  },
  {
    path: 'personagens-novo',
    component: PersonagensNovoComponent,
    data: { title: 'Adicionar Personagem' }
  },
  {
    path: 'personagens-editar/:id',
    component: PersonagensEditarComponent,
    data: { title: 'Editar Personagem' }
  },
  // { path: '',
  //   redirectTo: '/personagens',
  //   pathMatch: 'full'
  // },
  {
    path: 'hqs',
    component: HqsComponent,
    data: { title: 'Lista de HQs' }
  },
  {
    path: 'hqs-detalhe/:id',
    component: HqsDetalheComponent,
    data: { title: 'Detalhe da HQ' }
  },
  {
    path: 'hqs-novo',
    component: HqsNovoComponent,
    data: { title: 'Adicionar HQ' }
  },
  {
    path: 'hqs-editar/:id',
    component: HqsEditarComponent,
    data: { title: 'Editar a HQ' }
  },
  { path: '',
    redirectTo: '/hqs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
