import { Action, createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/model/pokemon/pokemon.model";
import * as pokemonAction from "../store/pokemon.actions"

export interface State {
    pokemonList : Pokemon[]|null;
}
const initialState : State= {
    pokemonList :  null,
}


const _pokemonReducer = createReducer(
    initialState,
    on(pokemonAction.loadPokemonList, (state:State) => ({ ...state, limit: 30 })),
);

export function pokemonreducer(state: State | undefined, action: Action):State {
    return _pokemonReducer(state, action);
}