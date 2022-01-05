import { TextoService } from './../texto.service';
import { Component, OnInit } from '@angular/core';
import { Texto } from '../texto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-read',
  templateUrl: './texto-read.component.html',
  styleUrls: ['./texto-read.component.css']
})
export class TextoReadComponent implements OnInit {
  textos: Texto[] = [];
  
  displayedColumns: string[] = ['id', 'titulo', 'conteudo','votos'];
  
  constructor(private service: TextoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      this.textos = response;
    })
  }

  navegarParaTextoCreate() {
    this.router.navigate(["textos/create"]);
  }
}
