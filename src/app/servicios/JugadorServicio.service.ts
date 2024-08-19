import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Jugador } from "../clases/Jugador";

@Injectable({
    providedIn:'root'
})
export class JugadorServicio{
    private urlBase = "http://localhost:8080/jugador"

    constructor(private http : HttpClient){}

    getJugadores() : Observable<Jugador[]>{
        return this.http.get<Jugador[]>(this.urlBase);
    }
}