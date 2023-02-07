import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  constructor(private paisService: PaisService){}
  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []
  
  buscar( termino: string ){
    this.hayError = false
    this.termino = termino
    this.paisService.buscarPais(this.termino).subscribe(paises=>{
      this.paises = paises
      console.log(paises)
    }, (err)=>{
      this.hayError = true
    });
  }
  sugerencias( termino: string ){
    console.log(termino)
  }
}
