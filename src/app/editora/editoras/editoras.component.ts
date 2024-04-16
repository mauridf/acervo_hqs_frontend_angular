import { Component, OnInit, ViewChild } from '@angular/core';
import { Editoras } from '../../models/editora';
import { ApiService } from '../../service/api-scans-cqrs.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editoras',
  templateUrl: './editoras.component.html',
  styleUrls: ['./editoras.component.scss']
})
export class EditorasComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'nomeEditora','actions'];
  dataSource = new MatTableDataSource<Editoras>();
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _api: ApiService, private router: Router) { }

  ngOnInit() {
    this.carregarEditoras();
  }

  carregarEditoras() {
    this._api.getEditoras()
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
    this.router.navigate(['/editoras-novo']); // Navegue para a rota de edição
  }

  editarEditora(id: number) {
    this.router.navigate(['/editoras-editar', id]);
  }  

  deleteEditora(id: number) {
    const confirmation = confirm('Tem certeza de que deseja excluir esta editora?');
    if (confirmation) {
      this.isLoadingResults = true;
      this._api.deleteEditora(id).subscribe(
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
}