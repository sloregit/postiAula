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
  conf;
  constructor(private http: StudentiDBserviceService) {}
  aggiungiStudente() {
    let doc = {
      nome: 'Ariel',
      cognome: 'Nettuno',
      sezione: 'F',
      nascita: '22/08/1990',
    };
    this.http.insertStudente(JSON.stringify(doc)).subscribe((val) => {
      (this.conf = val), console.log(val);
    });
  }
}
