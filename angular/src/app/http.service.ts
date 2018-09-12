import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
    
  }
  getPokemon(){
    let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/800/');
    pokemon.subscribe(data => console.log("Get one pokemon", data))
    pokemon.subscribe(data => {
      for(var x in data.moves){
        console.log("Get pokemon moves: " + data.moves[x].move["name"]);
      }
    })
    pokemon.subscribe(data =>{console.log("similar ability pokemon");
      let ability = this._http.get(data.abilities[0].ability.url);
      ability.subscribe(data2 =>{console.log("similiar ability pokemons:");
        for(var x in data2["pokemon"]){
          console.log(data2["pokemon"][x]["pokemon"])
        };

      
      })})} 
  
    }

