import { Component, VERSION } from '@angular/core';
import { StudentiDBserviceService } from './studenti-dbservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cercaStudenti: boolean;
  cercaSezione: boolean;
  arraySezioni: Array<string>;
  parRisultati;
  constructor(private http: StudentiDBserviceService) {
    this.arraySezioni = ['A', 'B', 'C', 'D', 'E', 'F'];
  }
  foo() {
    this.http.cercaTutti().subscribe((val) => {
      const collection = JSON.parse(val);
      this.parRisultati = val;
      console.log(val);
    });
  }
}
