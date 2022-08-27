import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino : string = "hola Mundo";
  hayError: boolean = false;
  capital  : Country[] = [];

  constructor( private capitalService: PaisService ) { }

    buscar( termino: string){
      this.hayError = false;
      this.termino = termino;
      this.capitalService.buscarCapital(this.termino)
      .subscribe( (capital) =>{
        console.log(capital);
        this.capital = capital;
      }, (err) => {
        this.hayError = true;
        this.capital   = [];
      } );
    }
    // sugerencias(termino: string){
    //   this.hayError = false;
    //   //TODO: crear sugeenicas.
    // }
    
  }
