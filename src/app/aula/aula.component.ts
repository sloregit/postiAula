import { Component, OnInit, Input } from '@angular/core';
import { CercaAuleService } from './cerca-aule.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Classe, Studente } from '../shared-class';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { switchScan } from 'rxjs';

export class aulaV implements Classe {
  anno;
  sezione;
  classe;
  constructor(response) {
    this.anno = response.anno;
    this.sezione = response.sezione;
    this.classe = response.classe;
  }
  genera() {
    try {
      if (this.classe.length) {
        switch (this.classe.length) {
          case this.classe.length >= 6: {
          }
          case this.classe.length > 6 && this.classe.length <= 12: {
          }
          case this.classe.length > 12 && this.classe.length <= 18: {
          }
          case this.classe.length > 18 && this.classe.length <= 24: {
          }
          case this.classe.length > 24 && this.classe.length <= 30: {
          }
          case this.classe > 30: {
          }
        }
      }
    } catch (e) {
      ('Errore in aulaV.genera');
    }
  }
}

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css'],
})
export class AulaComponent implements OnInit {
  @Input() arraySezioni: Array<string>;
  @Input() arrayAnniScolastici: Array<number>;
  risposta;
  aula: aulaV;
  arrayStudenti: Array<Studente>;
  arrayStudenti2: Array<Studente>;
  arrayStudenti3: Array<Studente>;
  arr;
  constructor(private cerca: CercaAuleService) {}
  cercaAula(anno, sezione) {
    this.cerca.cercaAula(1, 'D').subscribe((val) => {
      this.risposta = JSON.parse(val);
      console.log(val);
      this.aula = new aulaV(this.risposta);
      console.log(this.aula.classe);
      this.arrayStudenti = this.risposta.classe.slice(0, 4);
      this.arrayStudenti2 = this.risposta.classe.slice(4, 9);
      this.arrayStudenti3 = this.risposta.classe.slice(10);
    });
  }

  drop(event: CdkDragDrop<Studente[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  ngOnInit() {}
}
