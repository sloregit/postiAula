import { Component, OnInit, Input } from '@angular/core';
import { CercaAuleService } from './cerca-aule.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Studente } from '../shared-class';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css'],
})
export class AulaComponent implements OnInit {
  @Input() arraySezioni: Array<string>;
  @Input() arrayAnniScolastici: Array<number>;
  risposta;
  arrayStudenti: Array<Studente>;
  arrayStudenti2: Array<Studente>;
  arrayStudenti3: Array<Studente>;
  constructor(private cerca: CercaAuleService) {}
  cercaAula() {
    this.cerca.cercaAula(1, 'D').subscribe((val) => {
      console.log(val);
      this.risposta = JSON.parse(val);
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
