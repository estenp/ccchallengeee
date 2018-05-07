import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  public getUserByUsername(username: string): Observable<any> {
    return this.http.get(this.url + `/users/${username}`).pipe(
      catchError(val => of(`ERROR: ${val}`))
    );
  }

  public getFollowersByUsername(username: string): Observable<any> {
    return this.http.get(this.url + `/users/${username}/followers`).pipe(
      catchError(val => of(`ERROR: ${val}`))
    );
  }

}
