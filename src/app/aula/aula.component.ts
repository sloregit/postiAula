import { Component, OnInit, Input } from '@angular/core';
import { CercaAuleService } from './cerca-aule.service';

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
    this.cerca.cercaAula(1, 'B').subscribe((val) => {
      console.log(val);
      this.risposta = val;
    });
  }
  ngOnInit() {}
}
