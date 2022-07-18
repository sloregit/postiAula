import { Component, OnInit, Input } from '@angular/core';
import { CercaAuleService } from './cerca-aule.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css'],
})
export class AulaComponent implements OnInit {
  @Input() arraySezioni: Array<string>;
  @Input() arrayAnniScolastici: Array<number>;
  risposta;
  constructor(private cerca: CercaAuleService) {}
  cercaAula() {
    this.cerca.cercaAula(3, 'D').subscribe((val) => {
      console.log(val);
      this.risposta = val;
    });
  }
  ngOnInit() {}
}
