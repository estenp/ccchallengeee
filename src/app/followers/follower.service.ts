import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private url = 'https://api.github.com';

  static getFollowersByUsername(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(
    private http: HttpClient
  ) { }

  public getFollowersByUsername(username: string): Observable<any> {
    console.log(username);
    return this.http.get(this.url + `/users/${username}/followers`).pipe(
      catchError(val => of(`ERROR: ${val}`))
    );
  }

}
