import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  public progreso1: number = 25;
  public progreso2: number = 55;


  get getPorcentaje1() {
    return `${ this.progreso1 }%`
  }

   get getPorcentaje2() {
    return `${ this.progreso2 }%`
  }

}
