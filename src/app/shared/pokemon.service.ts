import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../model/pokemonList/pokemon-list.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
    apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=';

    constructor(private http: HttpClient) { }

    loadPokemonApi(limit: number): Observable<PokemonList> {
        return this.http.get<PokemonList>(`${this.apiUrl}${limit}`)
    }

}