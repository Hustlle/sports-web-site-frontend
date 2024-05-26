import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {
  }

  getTest(): Observable<Object> {
    return this.http.get(`${this.apiUrl}`)
  }
}
