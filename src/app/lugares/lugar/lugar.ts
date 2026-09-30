import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss',
})
export class Lugar {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      categoria: new FormControl('', [Validators.required]),
      localização: new FormControl('', [Validators.required]),
      urlFoto: new FormControl('', [Validators.required]),
      avaliacao: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
    });
  }

  salvar(){
    console.log('valores:', this.camposForm.value);
  }

}
