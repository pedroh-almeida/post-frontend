import { Router } from '@angular/router';
import { Texto } from './../texto.model';
import { TextoService } from './../texto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-create',
  templateUrl: './texto-create.component.html',
  styleUrls: ['./texto-create.component.css']
})
export class TextoCreateComponent implements OnInit {

  texto: Texto = {
    titulo: '',
    conteudo: ''

  }
  constructor(private service: TextoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.craete(this.texto).subscribe((resposta) => {
      this.router.navigate(['textos']);
      this.service.menssagem('Texto criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.menssagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['textos']);
  }

}
