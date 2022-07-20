import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CercaAuleService {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/scuola-ayrnz/endpoint';

  constructor(private http: HttpClient) {}
  cercaAula(anno, sezione) {
    return this.http.get<string>(
      this.URL + '/cercaClasse?' + 'anno=' + anno + '&&sezione=' + sezione
    );
  }
  aggiornaAula(body) {
    return this.http.post<string>(this.URL + '/aggiornaClasse?', body);
  }
}
