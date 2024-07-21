import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetRecommendedContentResponseDto} from "../dtos/response/get.recommended.content.response.dto";

@Injectable({
  providedIn: 'root'
})
export class RecommendedContentService {
  apiUrl = `${environment.adminApiBase}/recommended-content`;
  constructor(private httpClient: HttpClient) { }

  getRecommendedContent() {
    return this.httpClient.get<GetRecommendedContentResponseDto[]>(this.apiUrl);
  }
}
