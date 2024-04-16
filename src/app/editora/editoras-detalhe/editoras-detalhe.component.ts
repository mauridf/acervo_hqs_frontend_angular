import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../service/api-scans-cqrs.service';
import { Editoras } from 'src/app/models/editora';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editoras-detalhe',
  templateUrl: './editoras-detalhe.component.html',
  styleUrls: ['./editoras-detalhe.component.scss']
})
export class EditorasDetalheComponent implements OnInit {
  editora: Editoras = {
    nomeEditora: '',
    id: 0
  };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getEditora(this.route.snapshot.params['id']);
  }

  getEditora(id: number) {
    this.api.getEditora(id)
      .subscribe(data => {
        this.editora = data;
        console.log(this.editora);
        this.isLoadingResults = false;
      });
  }

  deleteEditora(id: number) {
    const confirmation = confirm('Tem certeza de que deseja excluir esta editora?');
    if (confirmation) {
      this.isLoadingResults = true;
      this.api.deleteEditora(id).subscribe(
        () => {
          this.isLoadingResults = false;
          this.router.navigate(['/editoras']);
        },
        (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    }
  }
}
