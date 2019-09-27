import { PersonajesService } from './../../servicios/personajes.service'; //siempre deben importarse los componentes y servicios antes de ser usados!
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
 // constructor (cargar la informacion que se va usar
 // cargar el servicio dentro del constructor)
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes : any [] = [];

  
  constructor(private _personajesService : PersonajesService,private router: Router) { 

    // this.personajesC = this._personajesService.getPersonaje();
        
    // en mi variable personajesC que inicializa vacia voy a cargarle todos los personajes que provienen de mi servicio

  }
  
  ngOnInit() {
    this.personajes = this._personajesService.getPersonajes();
    
    // estamos dentro de un metodo en una clase por eso el this
    // console.log(this.personajes);
    // como recorremos el array? -> *ngFor :D
  
  }

  verPersonaje(idx : number) {
    console.log(idx);
    this.router.navigate(['/personaje',idx]);
  }

  


}
