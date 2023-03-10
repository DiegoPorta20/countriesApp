import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  
  pais!: Country[]

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService){}
  ngOnInit() {
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisAlpha(id)),
        tap(console.log)
      ).subscribe((resp)=>{
        this.pais = resp
        console.log(this.pais)
    })
  }
}
