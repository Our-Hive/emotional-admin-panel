import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {GetContactLineResponseDto} from "../dtos/response/get.contact.line.response.dto";
import {PostContactLineRequestDto} from "../dtos/request/post.contact.line.request.dto";

@Injectable({
  providedIn: 'root'
})
export class ContactLineService {
  apiUrl = `${environment.adminApiBase}/contact-lines`;
  constructor(private http: HttpClient) { }

  getContactLines() {
    return this.http.get<GetContactLineResponseDto[]>(`${this.apiUrl}`);
  }

  createContactLine(contactLine: PostContactLineRequestDto) {
    return this.http.post(`${this.apiUrl}`, contactLine);
  }
}
