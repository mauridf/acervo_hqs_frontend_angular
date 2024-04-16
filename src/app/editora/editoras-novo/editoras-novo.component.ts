import { ApiService } from './../../service/api-scans-cqrs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editoras-novo',
  templateUrl: './editoras-novo.component.html',
  styleUrls: ['./editoras-novo.component.scss']
})
export class EditorasNovoComponent implements OnInit {
  editoraForm!: FormGroup;
  nomeEditora: FormControl = new FormControl('');
  id!: number;
  isLoadingResults = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.editoraForm = this.formBuilder.group({
       'nomeEditora' : [null, Validators.required]
     });
  }

  addEditora() {
    if (this.editoraForm.valid) {
      this.isLoadingResults = true;
      this.api.addEditora(this.editoraForm.value)
        .subscribe(
          () => {
            this.successMessage = 'Editora adicionada com sucesso!';
            this.isLoadingResults = false;
            // Limpar o formulário após o sucesso, se necessário
            this.editoraForm.reset();
            this.router.navigate(['/editoras']);
          },
          (err) => {
            console.log(err);
            this.errorMessage = 'Ocorreu um erro ao adicionar a editora. Por favor, tente novamente.';
            this.isLoadingResults = false;
          }
        );
    } else {
      this.errorMessage = 'Por favor, preencha o formulário corretamente.';
    }
  }

  updateErrorMessage() {
    if (this.nomeEditora.hasError('required') && (this.nomeEditora.dirty || this.nomeEditora.touched)) {
      this.errorMessage = 'Você deve inserir um valor.';
    } else {
      this.errorMessage = '';
    }
  }

  voltarListaEditoras() {
    this.router.navigate(['/editoras']);
  }
}