import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {
  }

}
