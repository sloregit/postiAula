import { Component, OnInit } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-cerca-tutti',
  templateUrl: './cerca-tutti.component.html',
  styleUrls: ['./cerca-tutti.component.css'],
})
export class CercaTuttiComponent implements OnInit {
  parRisultati;
  constructor(private http: StudentiDBserviceService) {}
  foo() {
    this.http.cercaTutti().subscribe((val) => {
      const collection = JSON.parse(val);
      this.parRisultati = val;
      console.log(val);
    });
  }
  ngOnInit() {}
}
