import { Component, OnInit, Input } from '@angular/core';
import { CercaAuleService } from './cerca-aule.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Classe, Studente } from '../shared-class';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

export interface aula {
  file: Array<Studente>;
}
@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css'],
})
export class AulaComponent implements OnInit, aula {
  @Input() arraySezioni: Array<string>;
  @Input() arrayAnniScolastici: Array<number>;
  risposta: Classe;
  file;
  constructor(private service: CercaAuleService) {
    this.file = [];
  }

  cercaAula(anno, sezione) {
    this.service.cercaAula(1, 'D').subscribe((val) => {
      this.risposta = JSON.parse(val);
      this.risposta.classe.map((fila, i) => {
        this.file[i] = fila;
      });
    });
  }

  foo() {
    let _classe = new Classe(
      this.risposta.anno,
      this.risposta.sezione,
      this.file
    );
    this.service.aggiornaAula(_classe).subscribe((res) => {
      console.log(res);
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
