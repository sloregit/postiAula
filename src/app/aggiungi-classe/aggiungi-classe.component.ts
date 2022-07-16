import { Component, OnInit, Input } from '@angular/core';
import { Classe, Studente } from '../shared-class';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-aggiungi-classe',
  templateUrl: './aggiungi-classe.component.html',
  styleUrls: ['./aggiungi-classe.component.css'],
})
export class AggiungiClasseComponent implements OnInit {
  panelOpenState = false;
  @Input() arraySezioni: Array<string>;
  arrayAnniScolastici: Array<string>;
  arrayStudenti: Array<Studente>;
  selezionati: Array<Studente>;
  apriLista: boolean;
  step: number;
  ok;
  res;
  constructor(private http: StudentiDBserviceService) {
    this.apriLista = false;
    this.step = 0;
    this.arrayAnniScolastici = ['1', '2', '3'];
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  chiudi() {
    this.apriLista = false;
  }
  cercaStudenti(sezione) {
    this.arrayStudenti = [];
    if (!sezione) {
      this.http.cercaTutti().subscribe((val) => {
        const collection = JSON.parse(val);
        collection.map((studente) => this.arrayStudenti.push(studente));
      });
    } else {
      this.http.getSezione(sezione).subscribe((val) => {
        const collection = JSON.parse(val);
        collection.map((studente) => this.arrayStudenti.push(studente));
      });
    }
    this.apriLista = true;
  }
  selezionatiUpdate(list) {
    this.selezionati = list;
  }
  foo3(anno, sezione) {
    try {
      if (anno && sezione && this.selezionati) {
        const classe = new Classe(anno, sezione, this.selezionati);
        this.ok =
          'anno: ' +
          classe.anno +
          ' ' +
          'sezione: ' +
          classe.sezione +
          ' ' +
          ' Studenti: ' +
          classe.classe.map((val) => val.nome);
        console.log(classe);
        this.http.aggiornaStudenti(classe).subscribe((res) => {
          console.log(res);
          this.res = res;
        });
      }
    } catch (e) {
      console.error('confermaTutto' + e);
    }
  }
  ngOnInit() {}
}
