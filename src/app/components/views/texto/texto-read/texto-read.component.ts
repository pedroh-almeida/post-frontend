import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-read',
  templateUrl: './texto-read.component.html',
  styleUrls: ['./texto-read.component.css']
})
export class TextoReadComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['id', 'titulo', 'conteudo', 'acoes'];
}
