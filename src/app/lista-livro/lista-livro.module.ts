import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaLivroPageRoutingModule } from './lista-livro-routing.module';

import { ListaLivroPage } from './lista-livro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaLivroPageRoutingModule
  ],
  declarations: [ListaLivroPage]
})
export class ListaLivroPageModule {}
