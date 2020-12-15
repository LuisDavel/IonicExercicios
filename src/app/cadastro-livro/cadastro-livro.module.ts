import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroLivroPageRoutingModule } from './cadastro-livro-routing.module';

import { CadastroLivroPage } from './cadastro-livro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroLivroPageRoutingModule
  ],
  declarations: [CadastroLivroPage]
})
export class CadastroLivroPageModule {}
