import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetPrimaryEmotionDto} from "../dtos/response/get.primery.emotion.dto";

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  apiUrl = `${environment.apiBase}/emotions`;
  constructor(private http: HttpClient) { }

  getPrimaryEmotions() {
    return this.http.get<GetPrimaryEmotionDto[]>(`${this.apiUrl}/primary`);
  }

  getPrimaryEmotion(name: string) {
    return this.http.get<GetPrimaryEmotionDto>(`${this.apiUrl}/primary/${name}`);
  }
}
