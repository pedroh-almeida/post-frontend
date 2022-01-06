import { Texto } from './../texto.model';
import { TextoService } from './../texto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-texto-delete',
  templateUrl: './texto-delete.component.html',
  styleUrls: ['./texto-delete.component.css']
})
export class TextoDeleteComponent implements OnInit {

  texto: Texto = {
    id: '',
    titulo: '',
    conteudo: ''
  }

  constructor(private service: TextoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.texto.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.texto.id!).subscribe((resposta) => {
      this.texto = resposta
      console.log(this.texto)
    })
  }

  delete(): void {
    this.service.delete(this.texto.id!).subscribe((resposta) => {
      this.router.navigate(['textos'])
      this.service.menssagem('Texto deletada com sucesso')
    }, err => {
      this.service.menssagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['textos']);
  }

}
