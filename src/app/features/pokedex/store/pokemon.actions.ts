import { createAction, props } from "@ngrx/store";

export const loadPokemonList = createAction('[Pokemon] Load Pokemon', 
props<{
limit: number;
}>)