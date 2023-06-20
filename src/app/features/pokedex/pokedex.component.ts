import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as pokeAction from './store/pokemon.actions'
 
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
constructor(private store: Store){}


  ngOnInit(): void {
      this.store.dispatch(pokeAction.loadPokemonList())
  }
}
