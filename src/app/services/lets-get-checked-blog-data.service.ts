import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as models from './../models/export';


@Injectable({
  providedIn: 'root'
})
export class LetsGetCheckedBlogDataService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPostsData(): Observable<models.LetsGetCheckedBlogPost[]> {
    let url = `http://localhost:9000/posts/`;
        return this.http
              .get<models.LetsGetCheckedBlogPost[]>(url)
              .pipe(
                catchError(this.handleError)
              );
  }

  public getSinglePostData(id:number): Observable<models.LetsGetCheckedBlogPost> {
    let url = `http://localhost:9000/posts/${id}`;
        return this.http
              .get<models.LetsGetCheckedBlogPost>(url)
              .pipe(
                catchError(this.handleError)
              );
  }

  public getAllCommentsSinglePostData(id:number):Observable<models.LetsGetCheckedBlogPostComments[]> {
    let url = `http://localhost:9000/posts/${id}/comments`;
        return this.http
              .get<models.LetsGetCheckedBlogPostComments[]>(url)
              .pipe(
                catchError(this.handleError)
              );
  }

  public createNewCommentInSinglePost(id:number, comment:models.LetsGetCheckedBlogPostComments ):Observable<models.LetsGetCheckedBlogPostComments> {
    const url = `http://localhost:9000/posts/${id}/comments`;
    return this.http
          .post<models.LetsGetCheckedBlogPostComments>(url, comment)
          .pipe(
            catchError(this.handleError)
          );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
