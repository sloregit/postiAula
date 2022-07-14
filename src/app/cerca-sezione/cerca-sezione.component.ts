import { Component, OnInit } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';
export class Studente {
  nome: string;
  sezione: string;
  constructor(nome, sezione) {
    this.nome = nome;
    this.sezione = sezione;
  }
}
export class Aula {
  file;
  posti;
}
@Component({
  selector: 'app-cerca-sezione',
  templateUrl: './cerca-sezione.component.html',
  styleUrls: ['./cerca-sezione.component.css'],
})
export class CercaSezioneComponent implements OnInit {
  arraySezioni: Array<string>;
  sezioneResponse: Array<Studente>;
  studenti = [];
  constructor(private http: StudentiDBserviceService) {
    this.arraySezioni = ['A', 'B', 'C', 'D', 'E', 'F'];
  }
  cercaSezione(sezione) {
    this.studenti = [];
    this.http.getSezione(sezione).subscribe({
      next: (res) => {
        this.sezioneResponse = JSON.parse(res);
        this.sezioneResponse.map((studente) => {
          this.studenti.push(new Studente(studente.nome, studente.sezione));
          console.log(this.studenti);
        });
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
  ngOnInit() {}
}
