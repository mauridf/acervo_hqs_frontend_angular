import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from './../../service/api-scans-cqrs.service';
@Component({
  selector: 'app-editoras-editar',
  templateUrl: './editoras-editar.component.html',
  styleUrls: ['./editoras-editar.component.scss']
})
export class EditorasEditarComponent implements OnInit {

  idEditora!: number;
  editoraForm!: FormGroup;
  nomeEditora: String = '';
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEditora(this.route.snapshot.params['id']);
    this.editoraForm = this.formBuilder.group({
   'nomeEditora' : [null, Validators.required]
 });
 }

 getEditora(id: number) {
  this.api.getEditora(id).subscribe(data => {
    this.idEditora = data.idEditora;
    this.editoraForm.setValue({
      nomeEditora: data.nomeEditora
    });
  });
}

updateEditora(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateEditora(this.idEditora, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/editoras-detalhe/' + this.idEditora]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}

}
