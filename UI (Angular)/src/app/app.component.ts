import { Component } from '@angular/core';
import { Game } from './models/game';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-ui';
  games: Game[] = [];
  gameToEdit?: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService
      .getGames()
      .subscribe((result: Game[]) => (this.games = result));
  }

  updateGameList(games: Game[]) {
    this.games = games;
  }

  initNewGame() {
    this.gameToEdit = new Game();
  }
  editGame(game: Game) {
    this.gameToEdit = game;
  }
}
