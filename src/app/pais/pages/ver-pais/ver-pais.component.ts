import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService){}
  ngOnInit() {
    this.activateRoute.params.subscribe(({id})=>{
      console.log(id)
      this.paisService.getPaisAlpha(id).subscribe(pais=>{
        console.log(pais)
      })
    })
  }
}
