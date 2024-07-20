import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {GetContactLineResponseDto} from "../dtos/response/get.contact.line.response.dto";

@Injectable({
  providedIn: 'root'
})
export class ContactLineService {
  apiUrl = `${environment.adminApiBase}/contact-lines`;
  constructor(private http: HttpClient) { }

  getContactLines() {
    return this.http.get<GetContactLineResponseDto[]>(`${this.apiUrl}`);
  }
}
