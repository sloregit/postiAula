import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentiDBserviceService {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/scuola-ayrnz/endpoint';

  constructor(private http: HttpClient) {}
  public getStudente(nome) {
    return this.http.get<string>(this.URL + '/cerca?nome=' + nome);
  }
  public getSezione(sezione) {
    return this.http.get<string>(this.URL + '/cercaSezione?sezione=' + sezione);
  }
}
