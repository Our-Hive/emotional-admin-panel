import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostAuthResponseDto } from '../dtos/response/post.auth.response.dto';
import { environment } from 'src/environments/environment.development';
import { PostAuthRequestDto } from '../dtos/request/post.auth.request.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `${environment.apiBase}/auth`;
  constructor(private http: HttpClient) {}

  login(loginCredentials: PostAuthRequestDto) {
    return this.http.post<PostAuthResponseDto>(
      `${this.apiUrl}/login`,
      loginCredentials
    );
  }
}
