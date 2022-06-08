import { MedicoService } from './medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles:[]
})
export class MedicoComponent implements OnInit {

  constructor(public _medicoService:MedicoService) { }

  ngOnInit(): void {
  }
  
  saludarMedico(nombre:string){
    return `Hola ${nombre};`
  }

  obtenerMedico(){

  }
}
