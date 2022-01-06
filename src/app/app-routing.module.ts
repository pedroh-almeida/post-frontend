import { VotoReadTextoComponent } from './components/views/voto/voto-read-texto/voto-read-texto.component';
import { TextoDeleteComponent } from './components/views/texto/texto-delete/texto-delete.component';
import { TextoCreateComponent } from './components/views/texto/texto-create/texto-create.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextoReadComponent } from './components/views/texto/texto-read/texto-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'textos',
    component: TextoReadComponent
  },
  {
    path: 'textos/create',
    component: TextoCreateComponent
  },
  {
    path: 'textos/delete/:id',
    component: TextoDeleteComponent
  },
  {
    path: 'textos/:id_voto/votos',
    component: VotoReadTextoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
