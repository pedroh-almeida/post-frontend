import { TextoService } from './../texto.service';
import { Component, OnInit } from '@angular/core';
import { Texto } from '../texto.model';

@Component({
  selector: 'app-texto-read',
  templateUrl: './texto-read.component.html',
  styleUrls: ['./texto-read.component.css']
})
export class TextoReadComponent implements OnInit {
  textos: Texto[] = [];
  
  displayedColumns: string[] = ['id', 'titulo', 'conteudo', 'acoes'];
  
  constructor(private service: TextoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response)
      this.textos = response;
    })
  }
}
