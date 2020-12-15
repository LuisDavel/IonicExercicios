import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroBibliotecaPageRoutingModule } from './cadastro-biblioteca-routing.module';

import { CadastroBibliotecaPage } from './cadastro-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroBibliotecaPageRoutingModule
  ],
  declarations: [CadastroBibliotecaPage]
})
export class CadastroBibliotecaPageModule {}
