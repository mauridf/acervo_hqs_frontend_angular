import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../service/api-scans-cqrs.service';
import { TipoPersonagem } from 'src/app/enum/tipo-personagem.enum';

@Component({
  selector: 'app-personagens-editar',
  templateUrl: './personagens-editar.component.html',
  styleUrls: ['./personagens-editar.component.scss']
})
export class PersonagensEditarComponent implements OnInit {
  id!: number;
  personagemForm!: FormGroup;
  tiposPersonagem: number[] = []; // Inicializando como um array vazio
  tiposPersonagemNumerico: { [key: number]: number } = {};
  isLoadingResults = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
    // Mapeia os tipos de personagem para seus valores numéricos correspondentes
    this.tiposPersonagem = Object.keys(TipoPersonagem)
    .filter((key: any) => !isNaN(Number(TipoPersonagem[key]))) // Filtra apenas as chaves numéricas
    .map((key: any) => Number(TipoPersonagem[key])); // Mapeia para os valores numéricos  
  
    // Mapeia os valores numéricos para seus próprios valores
    this.tiposPersonagemNumerico = this.tiposPersonagem.reduce((acc: { [key: number]: number }, value) => {
      acc[value] = value;
      return acc;
    }, {});
  } 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Atribuir o valor de id aqui
    this.getPersonagem(this.id);
  }

  getPersonagem(id: number) {
    this.api.getPersonagem(id).subscribe(data => {
      console.log('Dados do Personagem:', data);
      this.personagemForm = this.formBuilder.group({
        'id': [data.id],
        'nomePersonagem': [data?.nomePersonagem, Validators.required],
        'observacao': [data?.observacao],
        'dataCriacao': [data?.dataCriacao],
        'tipoPersonagem': [data?.tipoPersonagem]
      });
    });
  }

  updatePersonagem() {
    if (this.personagemForm?.valid) {
      this.isLoadingResults = true;
      console.log('this.id:', this.id);
      console.log('this.personagemForm:', this.personagemForm.value);
      this.api.updatePersonagem(this.id, this.personagemForm.value).subscribe(
        () => {
          this.isLoadingResults = false;
          this.successMessage = 'Personagem atualizado com sucesso!';
          this.router.navigate(['/personagens']);
        },
        (error: any) => {
          console.error(error);
          this.isLoadingResults = false;
          this.errorMessage = 'Erro ao atualizar personagem. Por favor, tente novamente.';
        }
      );
    }
  }

  clearMessages() {
    this.successMessage = '';
    this.errorMessage = '';
  }

  voltarListaPersonagens() {
    this.router.navigate(['/personagens']);
  }

  updateErrorMessage() {
    const nomePersonagemControl = this.personagemForm.get('nomePersonagem');
    if (nomePersonagemControl && nomePersonagemControl.hasError('required') && (nomePersonagemControl.dirty || nomePersonagemControl.touched)) {
      this.errorMessage = 'Você deve inserir um valor.';
    } else {
      this.errorMessage = '';
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
        return 'Personagem de Fábulas'
      case 5:
        return 'Personalidade Histórica'
        case 5:
          return 'Comum'
      default:
        return 'Desconhecido';
    }
  }
}
