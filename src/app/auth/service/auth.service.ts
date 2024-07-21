import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostAuthResponseDto } from '../dtos/response/post.auth.response.dto';
import { environment } from 'src/environments/environment.development';
import { PostAuthRequestDto } from '../dtos/request/post.auth.request.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiBase}/auth`;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  login(loginCredentials: PostAuthRequestDto) {
    return this.http.post<PostAuthResponseDto>(
      `${this.apiUrl}/login`,
      loginCredentials,
    );
  }
  isAuthenticated() {
    return this.getToken().length > 0;
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
