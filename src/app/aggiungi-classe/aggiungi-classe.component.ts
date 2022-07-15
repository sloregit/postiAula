import { Component, OnInit } from '@angular/core';
import { Studente } from '../shared-class';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-aggiungi-classe',
  templateUrl: './aggiungi-classe.component.html',
  styleUrls: ['./aggiungi-classe.component.css'],
})
export class AggiungiClasseComponent implements OnInit {
  panelOpenState = false;
  arrayStudenti: Array<Studente>;
  constructor(private http: StudentiDBserviceService) {
    this.arrayStudenti = [];
  }
  foo() {
    this.http.cercaTutti().subscribe((val) => {
      const collection = JSON.parse(val);
      collection.map((studente) => this.arrayStudenti.push(studente));
      console.log(this.arrayStudenti);
    });
  }
  ngOnInit() {}
}
