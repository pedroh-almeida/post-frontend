import { Voto } from './../voto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VotoService } from './../voto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-voto-create',
  templateUrl: './voto-create.component.html',
  styleUrls: ['./voto-create.component.css']
})
export class VotoCreateComponent implements OnInit {

  id_texto: String = ''

  voto: Voto = {
    id: '',
    status: '',
    comentario: ''
  }

  status = new FormControl("", [Validators.minLength(2)])

  constructor(private service: VotoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_texto = this.route.snapshot.paramMap.get('id_texto')!
  }

  create():void {
    this.service.create(this.voto, this.id_texto).subscribe(resposta => {
      this.router.navigate([`textos/${this.id_texto}/votos`])
      this.service.menssagem('Voto criado com sucesso!')
    }, err => {
      this.router.navigate([`textos/${this.id_texto}/votos`])
      this.service.menssagem('Erro ao criar voto!')
    })
  }
  
  cancel(): void {
    this.router.navigate([`textos/${this.id_texto}/votos`])
  }

  getMessage() {
    if(this.status.invalid) {
      return "Campo status deve ter entre 2 e 30 caracteres";
    }
    return false;
  }

}
