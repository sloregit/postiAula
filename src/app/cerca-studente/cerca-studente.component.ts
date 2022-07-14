import { Component, OnInit } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-cerca-studente',
  templateUrl: './cerca-studente.component.html',
  styleUrls: ['./cerca-studente.component.css'],
})
export class CercaStudenteComponent implements OnInit {
  studente: string;
  constructor(private http: StudentiDBserviceService) {}
  cercaStudente() {
    this.http.getStudente().subscribe({
      next: (studente) => {
        this.studente = studente;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
  ngOnInit() {}
}
