import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetImageResponseDto} from "../dtos/response/get.image.response.dto";
import {GetImageUrlResponseDto} from "../../generation/response/get.image.url.response.dto";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = `${environment.adminApiBase}/images`;
  constructor(private httpClient: HttpClient) { }

  getImages(size: number, startAfter: string) {
    return this.httpClient.get<GetImageResponseDto[]>(this.apiUrl,
      {
        params: {
          size: size.toString(),
          startAfter: startAfter
      }}
    );
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post<GetImageUrlResponseDto>(this.apiUrl, formData);
  }

  getImagesByApprovalStatus(approved: boolean) {
    return this.httpClient.get<GetImageResponseDto[]>(this.apiUrl,
      {
        params: {
          approved: approved.toString()
      }}
    );
  }

}
