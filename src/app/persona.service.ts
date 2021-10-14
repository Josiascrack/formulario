import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas:any[]=[]
  constructor() { }
  save(persona:any){
    this.personas.push(persona)
    console.log("salio")
  }
  listar(){
    return this.personas
  }
  eliminar(persona:any){
    this.personas.splice(persona,1)
  }
}
