import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voto-read-texto',
  templateUrl: './voto-read-texto.component.html',
  styleUrls: ['./voto-read-texto.component.css']
})
export class VotoReadTextoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'status', 'comentario'];

  constructor() { }

  ngOnInit(): void {
  }

}
