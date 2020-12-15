import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { biblioteca } from '../shared/biblioteca';
import { BibliotecaService } from '../shared/biblioteca.service';

@Component({
  selector: 'app-cadastro-biblioteca',
  templateUrl: './cadastro-biblioteca.page.html',
  styleUrls: ['./cadastro-biblioteca.page.scss'],
})

export class CadastroBibliotecaPage implements OnInit {

   
  biblioteca: biblioteca;

  constructor(
    private LivreService: BibliotecaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.biblioteca = new biblioteca();    
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('codigo'));
    if(codigo) {
      this.biblioteca.codigo = this.LivreService.getCodigo()
    }
  }

  ngOnInit() {
  }

  salvar() {
    console.log(this.biblioteca);
    this.LivreService.salvar(this.biblioteca); 
    this.router.navigate(['bibliotecas'])
  }



}
