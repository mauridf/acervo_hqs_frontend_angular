import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorasComponent } from './editora/editoras/editoras.component';
import { EditorasDetalheComponent } from './editora/editoras-detalhe/editoras-detalhe.component';
import { EditorasNovoComponent } from './editora/editoras-novo/editoras-novo.component';
import { EditorasEditarComponent } from './editora/editoras-editar/editoras-editar.component';
import { EdicoesComponent } from './edicao/edicoes/edicoes.component';
import { EdicoesDetalheComponent } from './edicao/edicoes-detalhe/edicoes-detalhe.component';
import { EdicoesEditarComponent } from './edicao/edicoes-editar/edicoes-editar.component';
import { EdicoesNovoComponent } from './edicao/edicoes-novo/edicoes-novo.component';
import { PersonagensComponent } from './personagem/personagens/personagens.component';
import { PersonagensDetalheComponent } from './personagem/personagens-detalhe/personagens-detalhe.component';
import { PersonagensEditarComponent } from './personagem/personagens-editar/personagens-editar.component';
import { PersonagensNovoComponent } from './personagem/personagens-novo/personagens-novo.component';
import { HqsComponent } from './hq/hqs/hqs.component';
import { HqsDetalheComponent } from './hq/hqs-detalhe/hqs-detalhe.component';
import { HqsEditarComponent } from './hq/hqs-editar/hqs-editar.component';
import { HqsNovoComponent } from './hq/hqs-novo/hqs-novo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EditorasComponent,
    EditorasDetalheComponent,
    EditorasNovoComponent,
    EditorasEditarComponent,
    EdicoesComponent,
    EdicoesDetalheComponent,
    EdicoesEditarComponent,
    EdicoesNovoComponent,
    PersonagensComponent,
    PersonagensDetalheComponent,
    PersonagensEditarComponent,
    PersonagensNovoComponent,
    HqsComponent,
    HqsDetalheComponent,
    HqsEditarComponent,
    HqsNovoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
