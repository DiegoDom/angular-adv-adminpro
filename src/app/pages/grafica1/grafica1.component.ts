import { Component } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  /* Grafica 1 */
  public title1: string = 'Sales';
  public data1: MultiDataSet = [[350, 450, 100]];
  public labels1: Label[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public colors1: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] } ];

  /* Grafica 2 */
  public title2: string = 'Buys';
  public data2: MultiDataSet = [[250, 650, 200]];
  public labels2: Label[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public colors2: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] } ];

  /* Grafica 3 */
  public title3: string = 'Mails';
  public data3: MultiDataSet = [[150, 500, 300]];
  public labels3: Label[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public colors3: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] } ];

  /* Grafica 4 */
  public title4: string = 'Shipping';
  public data4: MultiDataSet = [[150, 450, 100]];
  public labels4: Label[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public colors4: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] } ];

}
