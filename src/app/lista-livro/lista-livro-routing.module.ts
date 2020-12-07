import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaLivroPage } from './lista-livro.page';

const routes: Routes = [
  {
    path: '',
    component: ListaLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaLivroPageRoutingModule {}
