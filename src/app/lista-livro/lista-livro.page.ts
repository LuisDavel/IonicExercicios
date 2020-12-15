import { Component, OnInit } from '@angular/core';
import { livro } from '../shared/livro';
import { LivreService } from '../shared/livro.service';
import { ViewWillEnter } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.page.html',
  styleUrls: ['./lista-livro.page.scss'],
})
export class ListaLivroPage implements OnInit, ViewWillEnter {

  listaLivro: livro[];

  constructor( 
    private listaService: LivreService, 
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.listar();
  }

  listar() {  
    this.listaLivro = this.listaService.getLivros();
  }

  editar(livro: livro) {
    this.router.navigate(['cadastro-livro', livro.codigo]);
  }


  excluir(livro:livro) {
    this.listaService.excluir(livro);
    this.listar();
  }

}
