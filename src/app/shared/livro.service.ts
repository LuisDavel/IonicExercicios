import { Injectable } from '@angular/core';
import { livro } from './livro';
import { Genero } from './genero.enum';

@Injectable({
    providedIn: 'root'
  })

export class LivreService {

    private livro: livro[];

    constructor(){

        this.livro = [
            {
                codigo: 1,
                titulo: 'D&D - Dungeons & Dragons e5',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                descricao: 'Manual - de como jogar Dungeons & Dragons um RPG muito famoso em sua modalidade.',
                autor:  'Gary Gygax',
                data_lancamento: new Date(2019,1,21),
                editor: 'Wizards of the Coast, TSR, Inc., Kenzer & Company',
                genero: Genero.RPG
            },
            {
                codigo: 2,
                titulo: 'Metamorphosis: Henshin',
                foto_livro: 'https://honeysanime.com/wp-content/uploads/2016/10/Henshin-manga-300x463.jpg',
                descricao: 'Saki Yoshida, é uma menina que ficou isolada pelo fato de ser introvertida, querendo mudar de ideia, ela muda de colégio e coemça a tentar subir sua escala social através da beleza, e acaba se drogando e isso acarretará em sua metamorfose.',
                autor:  'L Shindo',
                data_lancamento: new Date(2013,6,14),
                editor: 'Nenhuma',
                genero: Genero.HENTAI
            },
            {
                codigo: 3,
                titulo: 'A maldição do tigre',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/91Iq1jyYlAL.jpg',
                descricao: 'Tigers Curse é um romance dos gêneros épico, aventura e mitologia hindu, escrito por Colleen Houck e é o primeiro livro de uma série. Publicado em mais 18 países, chegou a umas das melhores posições no The New York Times. Foi rejeitado por muitas',
                autor:  'Colleen Houck',
                data_lancamento: new Date(2011),
                editor: 'Arqueiro',
                genero: Genero.ROMANCE
            },
            {
                codigo: 4,
                titulo: 'Naruto Shippuden',
                foto_livro: 'https://img.quizur.com/f/img5ee2777517b723.40460255.png?lastEdited=1591900059',
                descricao: 'Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila',
                autor:  'Masashi Kishimoto',
                data_lancamento: new Date(2007),
                editor: 'Shueisha',
                genero: Genero.MANGA
            }
        ];
    }

    getLivros() {
        return this.livro;
    }

    excluir(livro: livro) {
      this.livro = this.livro.filter(l => l.codigo !== livro.codigo);
    }

    salvar(livro: livro) {
        const indice = this.livro.findIndex(l => l.codigo === livro.codigo);
        if(indice === -1) {
          this.livro = [...this.livro, livro];
        } else {
          this.livro[indice] = {...livro};
        }
        console.log(this.livro);
    }
    
    getCodigo() {
      return this.livro.length + 1;
    }
      
    getLivro(codigo: number): livro {
      return this.livro.find(l => l.codigo === codigo);
    }
}

