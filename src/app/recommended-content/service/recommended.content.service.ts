import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetRecommendedContentResponseDto} from "../dtos/response/get.recommended.content.response.dto";
import {PostRecommendedContentRequestDto} from "../dtos/request/post.recommended.content.request.dto";

@Injectable({
  providedIn: 'root'
})
export class RecommendedContentService {
  apiUrl = `${environment.adminApiBase}/recommended-content`;
  constructor(private httpClient: HttpClient) { }

  getRecommendedContent() {
    return this.httpClient.get<GetRecommendedContentResponseDto[]>(this.apiUrl);
  }

  createRecommendedContent(recommendedContent: PostRecommendedContentRequestDto) {
    return this.httpClient.post(this.apiUrl, recommendedContent);
  }
}
