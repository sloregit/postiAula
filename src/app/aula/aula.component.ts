import { Component, OnInit, Input } from '@angular/core';
import { CercaAuleService } from './cerca-aule.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Studente } from '../shared-class';
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
  constructor(private cerca: CercaAuleService) {}
  cercaAula() {
    this.cerca.cercaAula(3, 'D').subscribe((val) => {
      console.log(val);
      this.risposta = JSON.parse(val);
      this.arrayStudenti = this.risposta.classe;
    });
  }
  ngOnInit() {}
}
