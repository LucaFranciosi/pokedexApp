import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromPokemon from '../features/pokedex/store/pokemon.reducer'

export interface AppState {
    auth: fromAuth.State;
    pokemon: fromPokemon.State
}




export const appReducer: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    pokemon: fromPokemon.pokemonreducer
};
