import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetPrimaryEmotionResponseDto} from "../dtos/response/get.primary.emotion.response.dto";
import {PostPrimaryEmotionRequestDto} from "../dtos/request/post.primary.emotion.request.dto";
import {PostSecondaryEmotionRequestDto} from "../dtos/request/post.secondary.emotion.request.dto";

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  apiUrl = `${environment.apiBase}/emotions`;
  constructor(private http: HttpClient) { }

  getPrimaryEmotions() {
    return this.http.get<GetPrimaryEmotionResponseDto[]>(`${this.apiUrl}/primary`);
  }

  getPrimaryEmotion(name: string) {
    return this.http.get<GetPrimaryEmotionResponseDto>(`${this.apiUrl}/primary/${name}`);
  }

  createPrimaryEmotion(emotion: PostPrimaryEmotionRequestDto) {
    return this.http.post(`${this.apiUrl}/primary`, emotion);
  }

  createSecondaryEmotion(emotion: PostSecondaryEmotionRequestDto) {
    return this.http.post(`${this.apiUrl}/secondary`, emotion);
  }
}
