import { ActivatedRoute } from '@angular/router';
import { VotoService } from './../voto.service';
import { Voto } from './../voto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voto-read-texto',
  templateUrl: './voto-read-texto.component.html',
  styleUrls: ['./voto-read-texto.component.css']
})
export class VotoReadTextoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'status', 'comentario'];

  id_texto: String = ""

  votos: Voto[] = []

  constructor(private service: VotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_texto = this.route.snapshot.paramMap.get('id_texto')!
    this.findAllByTexto()
  }

  findAllByTexto(): void{
    this.service.findAllByTexto(this.id_texto).subscribe((resposta) => {
      this.votos = resposta
      console.log(this.votos)
    })
  }
}
