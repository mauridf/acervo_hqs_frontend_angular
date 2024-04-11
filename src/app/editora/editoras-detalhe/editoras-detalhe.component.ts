import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../service/api-scans-cqrs.service';
import { Editoras } from 'src/app/models/editora';
@Component({
  selector: 'app-editoras-detalhe',
  templateUrl: './editoras-detalhe.component.html',
  styleUrls: ['./editoras-detalhe.component.scss']
})
export class EditorasDetalheComponent implements OnInit {
  editora: Editoras = {
    nomeEditora: '',
    idEditora: 0
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
    this.isLoadingResults = true;
    this.api.deleteEditora(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/editoras']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
