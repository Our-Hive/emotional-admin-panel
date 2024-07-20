import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetImageResponseDto} from "../dtos/response/get.image.response.dto";

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

}
