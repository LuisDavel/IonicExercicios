import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { biblioteca } from '../shared/biblioteca';
import { BibliotecaService } from '../shared/biblioteca.service';

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.page.html',
  styleUrls: ['./bibliotecas.page.scss'],
})
export class BibliotecasPage implements OnInit {
  biblioteca: biblioteca[];

  constructor(private BibliotecaService: BibliotecaService, 
    private router: Router) { }

  ngOnInit(
  ) {
  }

  ionViewWillEnter() {  // executado quando a página está prestes a entrar 
    this.listar();
  }

  listar() {  
    this.biblioteca = this.BibliotecaService.getBibliotecas();
  }

  editar(biblioteca: biblioteca) {
    this.router.navigate(['cadastro-biblioteca', biblioteca.codigo]);
  }


  excluir(biblioteca:biblioteca) {
    this.BibliotecaService.excluir(biblioteca);
    this.listar();
  }

}
