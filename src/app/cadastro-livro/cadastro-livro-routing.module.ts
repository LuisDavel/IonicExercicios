import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroLivroPage } from './cadastro-livro.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroLivroPageRoutingModule {}
