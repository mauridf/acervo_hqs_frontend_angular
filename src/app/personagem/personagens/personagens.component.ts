import { Component, OnInit, ViewChild } from '@angular/core';
import { Personagens } from '../../models/personagem';
import { ApiService } from '../../service/api-scans-cqrs.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'nomePersonagem','observacao','tipoPersonagem','actions'];
  dataSource = new MatTableDataSource<Personagens>();
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _api: ApiService, private router: Router) { }

  ngOnInit() {
    this.carregarPersonagens();
  }

  carregarPersonagens() {
    this._api.getPersonagens()
      .subscribe(res => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Função para abrir a página de edição
  abrirPaginaEdicao() {
    this.router.navigate(['/personagens-novo']); // Navegue para a rota de edição
  }

  editarPersonagem(id: number) {
    this.router.navigate(['/personagens-editar', id]);
  }  

  deletePersonagem(id: number) {
    const confirmation = confirm('Tem certeza de que deseja excluir este personagem?');
    if (confirmation) {
      this.isLoadingResults = true;
      this._api.deletePersonagem(id).subscribe(
        () => {
          this.isLoadingResults = false;
          window.location.reload();
        },
        (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    }
  }
  
  getTipoPersonagem(tipo: number): string {
    switch (tipo) {
      case 0:
        return 'Herói';
      case 1:
        return 'Vilão';
      case 2:
        return 'Equipe';
      case 3:
        return 'Anti-Herói';
      case 4:
        return 'Personagem de Fábulas';
      case 5:
        return 'Personalidade Histórica';
        case 5:
          return 'Comum';
      default:
        return 'Desconhecido';
    }
  }
}