import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../service/api-scans-cqrs.service';

@Component({
  selector: 'app-editoras-editar',
  templateUrl: './editoras-editar.component.html',
  styleUrls: ['./editoras-editar.component.scss']
})
export class EditorasEditarComponent implements OnInit {

  id!: number;
  editoraForm!: FormGroup;
  isLoadingResults = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // Atribuir o valor de id aqui
    this.getEditora(this.id);
  }

  getEditora(id: number) {
    this.api.getEditora(id).subscribe(data => {
      console.log('Dados da editora:', data);
      this.editoraForm = this.formBuilder.group({
        'id': [data.id],
        'nomeEditora': [data?.nomeEditora, Validators.required]
      });
    });
  }

  updateEditora() {
    if (this.editoraForm?.valid) {
      this.isLoadingResults = true;
      console.log('this.id:', this.id);
      console.log('this.editoraForm:', this.editoraForm.value);
      this.api.updateEditora(this.id, this.editoraForm.value).subscribe(
        () => {
          this.isLoadingResults = false;
          this.successMessage = 'Editora atualizada com sucesso!';
          this.router.navigate(['/editoras']);
        },
        (error: any) => {
          console.error(error);
          this.isLoadingResults = false;
          this.errorMessage = 'Erro ao atualizar editora. Por favor, tente novamente.';
        }
      );
    }
  }

  clearMessages() {
    this.successMessage = '';
    this.errorMessage = '';
  }

  voltarListaEditoras() {
    this.router.navigate(['/editoras']);
  }
}