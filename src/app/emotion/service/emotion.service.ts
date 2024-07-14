import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetPrimaryEmotionDto} from "../dtos/response/get.primary.emotion.dto";
import {PostPrimaryEmotionDto} from "../dtos/request/post.primary.emotion.dto";
import {PostSecondaryEmotionDto} from "../dtos/request/post.secondary.emotion.dto";

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

  createPrimaryEmotion(emotion: PostPrimaryEmotionDto) {
    return this.http.post(`${this.apiUrl}/primary`, emotion);
  }

  createSecondaryEmotion(emotion: PostSecondaryEmotionDto) {
    return this.http.post(`${this.apiUrl}/secondary`, emotion);
  }
}
