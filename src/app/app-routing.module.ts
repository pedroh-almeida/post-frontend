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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
