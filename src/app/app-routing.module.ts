import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-livro',
    pathMatch: 'full'
  },
  {
    path: 'lista-livro',
    loadChildren: () => import('./lista-livro/lista-livro.module').then( m => m.ListaLivroPageModule)
  },
  {
    path: 'cadastro-livro/:codigo',
    loadChildren: () => import('./cadastro-livro/cadastro-livro.module').then( m => m.CadastroLivroPageModule)
  },
  {
    path: 'cadastro-livro',
    loadChildren: () => import('./cadastro-livro/cadastro-livro.module').then( m => m.CadastroLivroPageModule)
  },
  {
    path: 'bibliotecas',
    loadChildren: () => import('./bibliotecas/bibliotecas.module').then( m => m.BibliotecasPageModule)
  },
  {
    path: 'cadastro-biblioteca',
    loadChildren: () => import('./cadastro-biblioteca/cadastro-biblioteca.module').then( m => m.CadastroBibliotecaPageModule)
  },
  {
    path: 'cadastro-biblioteca/:codigo',
    loadChildren: () => import('./cadastro-biblioteca/cadastro-biblioteca.module').then( m => m.CadastroBibliotecaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
