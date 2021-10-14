import { Component } from '@angular/core';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public personaService:PersonaService){

  }
  title = 'formulario';
  nombre = "";
  apellido = "";
  correo = "";
  telefono = "";
  facultad = "";
  lista : any[] = [];
  guardar(){
    console.log(this.nombre)
    var persona:any={
      nombre:this.nombre,
      apellido:this.apellido,
      correo:this.correo,
      telefono:this.telefono,
      facultad:this.facultad
    }
    this.personaService.save(persona)
  }
  listar(){
    this.lista=this.personaService.listar()
    console.log(this.lista)
  }
  eliminar(persona:any){
    console.log(persona)
    this.personaService.eliminar(persona);
  }
}