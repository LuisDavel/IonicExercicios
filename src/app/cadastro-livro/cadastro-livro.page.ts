import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { livro } from '../shared/livro';
import { Genero } from '../shared/genero.enum';
import {LivreService} from '../shared/livro.service';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.page.html',
  styleUrls: ['./cadastro-livro.page.scss'],
})
export class CadastroLivroPage implements OnInit {

   
  livro: livro;
  generos = Object.keys(Genero).map((key) => ({ valor: key, descricao: Genero[key]})); // Retorna o array de todos os enums, map retorna o valor;

  constructor(
    private LivreService: LivreService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 

    this.livro = new livro();    
    
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('codigo'));
    if(codigo) {
      if(this.livro.data_lancamento instanceof Date) {
        this.livro.data_lancamento = this.livro.data_lancamento.toISOString();
      }
    } else {
      this.livro.codigo = this.LivreService.getCodigo();
    }
  }

  ngOnInit() {
  }

  salvar() {
    console.log(this.livro);
    this.livro.genero = Genero[this.livro.genero];
    this.LivreService.salvar(this.livro);    
    this.router.navigate(['lista-livro'])
  }

}
