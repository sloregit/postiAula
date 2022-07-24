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
  risposta: Classe;
  arrayStudenti: Array<Studente>;
  arrayStudenti2: Array<Studente>;
  arrayStudenti3: Array<Studente>;
  arrayStudenti4: Array<Studente>;
  arrayStudenti5: Array<Studente>;
  constructor(private service: CercaAuleService) {}

  cercaAula(anno, sezione) {
    this.service.cercaAula(1, 'D').subscribe((val) => {
      this.risposta = JSON.parse(val);
      console.log(val);
      this.arrayStudenti = this.risposta.classe.slice(0, 5);
      this.arrayStudenti2 = this.risposta.classe.slice(5, 10);
      this.arrayStudenti3 = this.risposta.classe.slice(10, 15);
      this.arrayStudenti4 = this.risposta.classe.slice(15, 20);
      this.arrayStudenti5 = this.risposta.classe.slice(20, 25);
    });
  }

  foo() {
    console.log(this.arrayStudenti2);
    let conc = this.arrayStudenti.concat(
      this.arrayStudenti2,
      this.arrayStudenti3,
      this.arrayStudenti4,
      this.arrayStudenti5
    );
    let _classe = new Classe(this.risposta.anno, this.risposta.sezione, conc);
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
