import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveisService {

  private apiKey: string = '3c3a23cc5cf9a45c8ceac23ffa79b062';
  private urlMovieDb: string = 'https://api.themoviedb.org/3';
  constructor(private httpClient: HttpClient) {}

// Observable<any> assim que chegar uma requisicao vai mapear o tipo any
getMovies(page: number): Observable<any> {
  let url = `${this.urlMovieDb}/movie/popular?api_key=${this.apiKey}&language=pt-BR&${page}`;
  // retorna o resultado da requisicao
  return this.httpClient.get<any>(url)
    // se falhar uma vez ele tenta novamente
    .pipe(retry(2));
}

}
