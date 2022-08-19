import { Component, OnInit, Input } from '@angular/core';
import { CercaAuleService } from './cerca-aule.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
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
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  constructor(private service: CercaAuleService) {
    this.file = [];
  }

  cercaAula(anno, sezione) {
    this.service.cercaAula(anno, sezione).subscribe((val) => {
      console.log(val);
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
  drop(event: CdkDragDrop<any>) {
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
  enter() {}
  ngOnInit() {}
}
