import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { HomeComponent } from './components/home/home.component';
import {PersonajesComponent} from './components/personajes/personajes.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {path: 'home', component:HomeComponent},
    {path: 'personajes', component:PersonajesComponent},
    {path: 'personaje', component:PersonajeComponent},
    {path: 'about', component:AboutComponent},
    {path:'personaje/:id',component:PersonajeComponent}
    
];
// nombre : string

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// interfaz alumnos {
  // nombre : string,
  // edad: number
//}