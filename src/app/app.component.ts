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
    this.http
      .insertStudente('D', JSON.stringify('Paperina'))
      .subscribe((val) => (this.conf = val));
  }
}
