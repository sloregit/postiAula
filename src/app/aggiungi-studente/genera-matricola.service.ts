import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneraMatricolaService {
  secret: string = 'secret=s3gr3t1ss1m0';
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/scuola-ayrnz/endpoint';
  constructor(private http: HttpClient) {}
  getMatricola() {
    return this.http.get<string>(this.URL + 'newMatricola?' + this.secret);
  }
}
//secret s3gr3t1ss1m0
