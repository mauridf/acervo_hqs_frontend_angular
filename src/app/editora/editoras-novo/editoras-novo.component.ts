import { ApiService } from './../../service/api-scans-cqrs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-editoras-novo',
  templateUrl: './editoras-novo.component.html',
  styleUrls: ['./editoras-novo.component.scss']
})
export class EditorasNovoComponent implements OnInit {
  editoraForm!: FormGroup;
  nomeEditora: String = '';
  idEditora!: number;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.editoraForm = this.formBuilder.group({
    'idEditora' : [Validators.required],
    'nomeEditora' : [null, Validators.required]
  });
  }

  addEditora(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addEditora(form)
      .subscribe(res => {
          const id = res['idEditora'];
          this.isLoadingResults = false;
          this.router.navigate(['/editoras-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
