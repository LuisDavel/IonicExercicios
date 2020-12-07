import { Component, OnInit } from '@angular/core';
import { livro } from '../shared/livro';
import { LivreService } from '../shared/livro.service';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.page.html',
  styleUrls: ['./lista-livro.page.scss'],
})
export class ListaLivroPage implements OnInit {

  listaLivro: livro[];

  constructor(private listaService: LivreService ) {
    
   }

   ngOnInit() {
      this.listar();
  }

  listar() {  
    this.listaLivro = this.listaService.getLivros();
  };

  excluir(livro:livro) {
    this.listaService.excluir(livro);
    this.listar();
  }

}
