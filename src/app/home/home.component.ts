import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(30)
      .subscribe();
  }

}
