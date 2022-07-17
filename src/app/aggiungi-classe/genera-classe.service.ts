import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GeneraClasseService {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/scuola-ayrnz/endpoint';
  constructor(private http: HttpClient) {}
  public generaClasse(body) {
    return this.http.post<string>(this.URL + '/generaClasse?', body);
  }
}
