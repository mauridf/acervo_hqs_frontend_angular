import { Editoras } from '../../models/editora';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api-scans-cqrs.service';



@Component({
  selector: 'app-editoras',
  templateUrl: './editoras.component.html',
  styleUrls: ['./editoras.component.scss']
})
export class EditorasComponent implements OnInit {

  displayedColumns: string[] = [ 'ID', 'nome'];
  dataSource!: Editoras[];
  isLoadingResults: boolean | undefined;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getEditoras()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
