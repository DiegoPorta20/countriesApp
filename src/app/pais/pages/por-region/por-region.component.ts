import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  constructor(private paisService: PaisService){}
  termino: string = ''
  hayError: boolean = false
  regiones: Country[] = []
  type: string = 'Buscar Region ...'

  buscar( termino: string ){
    this.hayError = false
    this.termino = termino
    this.paisService.buscarRegion(this.termino).subscribe(regiones=>{
      this.regiones = regiones
      console.log(regiones)
    }, (err)=>{
      this.hayError = true
    });
  }
  sugerencias( termino: string ){
    console.log(termino)
  }
}
