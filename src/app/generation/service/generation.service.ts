import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {PostGenerateImageRequestDto} from "../request/post.generate.image.request.dto";
import {GetImageUrlResponseDto} from "../response/get.image.url.response.dto";

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  apiUrl = `${environment.adminApiBase}/generation`;
  constructor(private httpClient: HttpClient) { }

  generateImage(request: PostGenerateImageRequestDto) {
    return this.httpClient.post<GetImageUrlResponseDto>(this.apiUrl, request);
  }
}
