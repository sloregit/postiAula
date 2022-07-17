import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { Studente } from '../shared-class';

@Injectable()
export class GeneraMatricolaService {
  secret: string = 'secret=s3gr3t1ss1m0';
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/scuola-ayrnz/endpoint';
  constructor(private http: HttpClient) {}
  getMatricola() {
    return this.http
      .get<string>(this.URL + '/newMatricola?secret=s3gr3t1ss1m0')
      .pipe(take(1));
  }
}
//secret s3gr3t1ss1m0
