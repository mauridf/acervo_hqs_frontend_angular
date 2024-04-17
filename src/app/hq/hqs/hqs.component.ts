import { Component, OnInit, ViewChild } from '@angular/core';
import { Hqs } from '../../models/hqs';
import { ApiService } from '../../service/api-scans-cqrs.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hqs',
  templateUrl: './hqs.component.html',
  styleUrls: ['./hqs.component.scss']
})
export class HqsComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'titulo','categoria','status','actions'];
  dataSource = new MatTableDataSource<Hqs>();
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.carregarHqs();
  }

  carregarHqs() {
    this._api.getHqs()
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
    this.router.navigate(['/hqs-novo']); // Navegue para a rota de edição
  }

  editarHq(id: number) {
    this.router.navigate(['/hqs-editar', id]);
  }  

  deleteHq(id: number) {
    const confirmation = confirm('Tem certeza de que deseja excluir esta Hq?');
    if (confirmation) {
      this.isLoadingResults = true;
      this._api.deleteHq(id).subscribe(
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

  getCategoria(categoria: number): string {
    switch (categoria) {
      case 0:
        return 'Serie-Regular';
      case 1:
        return 'Mini-Série';
      case 2:
        return 'Crossover';
      case 3:
        return 'FCBD';
      case 4:
        return 'One-Shot';
      case 5:
        return 'Encadernado';
      case 6:
        return 'Graphic-Novel';
      default:
        return 'Desconhecido';
    }
  }

  getStatus(status: number): string {
    switch (status) {
      case 0:
        return 'Em Andamento';
      case 1:
        return 'Cancelado';
      case 2:
        return 'Terminado';
      case 3:
        return 'Incompleto';
      default:
        return 'Desconhecido';
    }
  }
}
