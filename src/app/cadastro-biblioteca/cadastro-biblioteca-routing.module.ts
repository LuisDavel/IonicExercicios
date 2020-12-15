import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroBibliotecaPage } from './cadastro-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroBibliotecaPageRoutingModule {}
