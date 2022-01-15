import { Component } from "@angular/core";


@Component({
    selector : "app-heroe",
    templateUrl: "./heroe.component.html"
})
export class HeroeComponent{

    nombre:string = "hulk";
    edad:number = 43;

    get NombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
}