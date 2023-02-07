import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  constructor(private paisService: PaisService){}
  termino: string = ''
  hayError: boolean = false
  capitales: Country[] = []
  type: string = 'Buscar Capital ...'

  buscar( termino: string ){
    this.hayError = false
    this.termino = termino
    this.paisService.buscarCapital(this.termino).subscribe(capitales=>{
      this.capitales = capitales
      console.log(capitales)
    }, (err)=>{
      this.hayError = true
    });
  }
  sugerencias( termino: string ){
    console.log(termino)
  }
}
