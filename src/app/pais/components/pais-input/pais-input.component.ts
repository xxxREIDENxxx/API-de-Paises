import { Component, EventEmitter, Output , OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PaisInputComponent implements OnInit{
  

  @Output() onEnter   : EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 
  
  @Input() placeholder: string = '';
  
  debauncer: Subject<string> = new Subject();  
  termino: string ="";
  
  ngOnInit() {
    this.debauncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor);
    })  
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }
  teclaPresionada( ){
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino);
    
    this.debauncer.next(this.termino);
  }
  
}
