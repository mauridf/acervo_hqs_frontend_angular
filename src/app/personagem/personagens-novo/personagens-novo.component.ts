import { ApiService } from './../../service/api-scans-cqrs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoPersonagem } from 'src/app/enum/tipo-personagem.enum';

@Component({
  selector: 'app-personagens-novo',
  templateUrl: './personagens-novo.component.html',
  styleUrls: ['./personagens-novo.component.scss']
})
export class PersonagensNovoComponent implements OnInit {
  personagemForm!: FormGroup;
  tiposPersonagem: number[] = []; // Inicializando como um array vazio
  tiposPersonagemNumerico: { [key: number]: number } = {};

  isLoadingResults = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
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
    this.personagemForm = this.formBuilder.group({
      'nomePersonagem': [null, Validators.required],
      'observacao': [''],
      'dataCriacao': [new Date(), Validators.required],
      'tipoPersonagem': [null, Validators.required]
    });
  }

  addPersonagem() {
    if (this.personagemForm.valid) {
      this.isLoadingResults = true;
      // Mapeia o valor selecionado de string para numérico antes de enviar para a API
      const formValue = {
        ...this.personagemForm.value,
        tipoPersonagem: Number(this.personagemForm.value.tipoPersonagem)
      };
      this.api.addPersonagem(formValue)
        .subscribe(
          () => {
            console.log(formValue);
            this.successMessage = 'Personagem adicionado com sucesso!';
            this.isLoadingResults = false;
            this.personagemForm.reset();
            this.router.navigate(['/personagens']);
          },
          (err) => {
            console.log(err);
            this.errorMessage = 'Ocorreu um erro ao adicionar o personagem. Por favor, tente novamente.';
            this.isLoadingResults = false;
          }
        );
    } else {
      this.errorMessage = 'Por favor, preencha o formulário corretamente.';
    }
  }

  updateErrorMessage() {
    const nomePersonagemControl = this.personagemForm.get('nomePersonagem');
    if (nomePersonagemControl && nomePersonagemControl.hasError('required') && (nomePersonagemControl.dirty || nomePersonagemControl.touched)) {
      this.errorMessage = 'Você deve inserir um valor.';
    } else {
      this.errorMessage = '';
    }
  }

  voltarListaPersonagens() {
    this.router.navigate(['/personagens']);
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