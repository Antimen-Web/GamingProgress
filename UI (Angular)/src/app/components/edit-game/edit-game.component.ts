import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
})
export class EditGameComponent {
  @Input() game?: Game;
  @Output() gamesUpdated = new EventEmitter<Game[]>();

  constructor(private GameService: GameService) {}

  ngOnInit(): void {}

  updateGame(game: Game) {
    this.GameService.updateGames(game).subscribe((games: Game[]) =>
      this.gamesUpdated.emit(games)
    );
  }

  deleteGame(game: Game) {
    this.GameService.deleteGames(game).subscribe((games: Game[]) =>
      this.gamesUpdated.emit(games)
    );
  }

  createGame(game: Game) {
    this.GameService.createGames(game).subscribe((games: Game[]) =>
      this.gamesUpdated.emit(games)
    );
  }
}
