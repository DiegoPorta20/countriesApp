import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  constructor(private paisService: PaisService){}
  termino: string = ''
  data: boolean = false
  buscar(){
    this.data = false
    this.paisService.buscarPais(this.termino).subscribe(response=>{
      console.log(response)
    }, (err)=>{
      this.data = true
    });
  }
}
