import { Component, Input, OnInit } from '@angular/core';
import { MoveisService } from 'src/app/services/moveis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];
  page = 1;
  constructor(private movieService: MoveisService) { }

  ngOnInit(): void {
    this.getMovies(this.page);
  }

  getMovies(page: number){
    // acessa MoviesService pega o retorno da funcao getMoves subsescreve en datas e passa datas para o array this.movies
    // ? a interrogacao e para caso o objeto venha vazio nao apresente erro
    // results e o objeto da api que contem todos os objetos, para exibir no html tem que passar por esse objeto
    // exibindo datas no console antes de passar para o array e possivel ver o objeto results o total_pages: e o total_results
    this.movieService.getMovies(this.page).subscribe((datas: any) => {this.movies = datas?.results; console.log(datas)})

  }

  
}
