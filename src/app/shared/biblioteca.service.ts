import { Injectable } from '@angular/core';
import { biblioteca } from './biblioteca';

@Injectable({
    providedIn: 'root'
  })

export class BibliotecaService {

    private biblioteca: biblioteca[];

    constructor(){

        this.biblioteca = [
            {
                codigo: 1,
                nome: 'Biblioteca Criciuma',
                foto: 'https://cdn.discordapp.com/attachments/637115612723937283/788536278676668466/download.jpg'
            },
            {
                codigo: 2,
                nome: 'Biblioteca de Pelotas',
                foto: 'https://cdn.discordapp.com/attachments/637115612723937283/788536390560120842/images.jpg'
               
            }
           
        ];
    }

    getBibliotecas() {
        return this.biblioteca;
    }

    excluir(biblioteca: biblioteca) {
      this.biblioteca = this.biblioteca.filter(l => l.codigo !== biblioteca.codigo);
    }

    salvar(biblioteca: biblioteca) {
        const indice = this.biblioteca.findIndex(l => l.codigo === biblioteca.codigo);
        if(indice === -1) {
          this.biblioteca = [...this.biblioteca, biblioteca];
        } else {
          this.biblioteca[indice] = {...biblioteca};
        }
        console.log(this.biblioteca);
    }
    
    getCodigo() {
      return this.biblioteca.length + 1;
    }
      
    getBiblioteca(codigo: number): biblioteca {
      return this.biblioteca.find(l => l.codigo === codigo);
    }
}

