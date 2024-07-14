import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GetUserResponseDto} from "../dtos/response/get.user.response.dto";
import {PostAdminRequestDto} from "../dtos/request/post.admin.request.dto";
import {PostAdminResponseDto} from "../dtos/response/post.admin.response.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = `${environment.apiBase}/users`;
  constructor(private httpClient: HttpClient) { }

  createAdmin(signupUserData: PostAdminRequestDto) {
    return this.httpClient.post<PostAdminResponseDto>(`${this.apiUrl}/admin`, signupUserData);
  }

  getUser() {
    return this.httpClient.get<GetUserResponseDto>(`${this.apiUrl}`);
  }
}
