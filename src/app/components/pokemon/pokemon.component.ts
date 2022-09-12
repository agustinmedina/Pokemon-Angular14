import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  name: string;
  urlImage: string;

  constructor(private pokemonService: PokemonService) {
    this.name = '';
    this.urlImage = '';
  }

  ngOnInit(): void {}

  search() {
    this.pokemonService.getPokemon(this.name).subscribe((data: any) => {
      this.urlImage = data.sprites.front_default;
    });
  }
}
