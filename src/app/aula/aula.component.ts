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

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css'],
})
export class AulaComponent implements OnInit {
  @Input() arraySezioni: Array<string>;
  @Input() arrayAnniScolastici: Array<number>;
  risposta;
  file: Array<Studente[]>;
  arrayStudenti: Array<Studente>;
  arrayStudenti2: Array<Studente>;
  arrayStudenti3: Array<Studente>;
  constructor(private cerca: CercaAuleService) {}
  cercaAula(anno, sezione) {
    this.cerca.cercaAula(1, 'D').subscribe((val) => {
      this.risposta = JSON.parse(val);
      //console.log(val);
      this.file = [
        this.risposta.classe.slice(0, 6),
        this.risposta.classe.slice(6, 12),
        this.risposta.classe.slice(12, 18),
        this.risposta.classe.slice(18, 24),
        this.risposta.classe.slice(24, 30),
      ];
      console.log(this.file);
    });
  }

  drop(event: CdkDragDrop<Array<Studente[]>>) {
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
