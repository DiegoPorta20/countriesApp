import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() type: string = ''

  debouce: Subject<string> = new Subject();

  termino: string = ''

  ngOnInit() {
    this.debouce.pipe(debounceTime(300)).subscribe( valor=>{
      this.onDebounce.emit(valor)
    } )
  }

  buscar(){
    this.onEnter.emit( this.termino )
  }
  teclaPresionada(){
    this.debouce.next( this.termino )
  }
}
