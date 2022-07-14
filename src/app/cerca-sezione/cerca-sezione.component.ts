import { Component, OnInit } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-cerca-sezione',
  templateUrl: './cerca-sezione.component.html',
  styleUrls: ['./cerca-sezione.component.css'],
})
export class CercaSezioneComponent implements OnInit {
  arraySezioni: Array<string>;
  sezione: string;
  constructor(private http: StudentiDBserviceService) {
    this.arraySezioni = ['A', 'B', 'C', 'D', 'E', 'F'];
  }

  ngOnInit() {}
}
