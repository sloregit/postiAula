import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CercaAuleService {
  constructor(private http: HttpClient) {}
}
