import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private url = 'GamingProgress';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateGames(game: Game): Observable<Game[]> {
    return this.http.put<Game[]>(`${environment.apiUrl}/${this.url}`, game);
  }

  public createGames(game: Game): Observable<Game[]> {
    return this.http.post<Game[]>(`${environment.apiUrl}/${this.url}`, game);
  }

  public deleteGames(game: Game): Observable<Game[]> {
    return this.http.delete<Game[]>(
      `${environment.apiUrl}/${this.url}/${game.id}`
    );
  }
}
