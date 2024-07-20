import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {PostGenerateImageRequestDto} from "../request/post.generate.image.request.dto";
import {GetGenerateImageResponseDto} from "../response/get.generate.image.response.dto";

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  apiUrl = `${environment.adminApiBase}/generation`;
  constructor(private httpClient: HttpClient) { }

  generateImage(request: PostGenerateImageRequestDto) {
    return this.httpClient.post<GetGenerateImageResponseDto>(this.apiUrl, request);
  }
}
