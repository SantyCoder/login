import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//Services
import { NotificationService } from '../common/notification/notification.service';
import * as CONFIG from '../../../parameters.json';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public api = CONFIG['API'];

  constructor(
      private http: HttpClient,
      private notification: NotificationService
  ) { }

  private handleError<T>(operation = 'Collection', result?: T) {
    return (response: any): Observable<T> => {
      let message = 'Estamos teniendo problemas de conexión';
      if (response.hasOwnProperty('status')) {
        result['status'] = response.status;
        result['statusText'] = response.statusText;
      }
      if (response.error === null) {
        return of(result as T);
      }
      //  If a many errors
      if (response.error.hasOwnProperty('errors')) {
        if (response.error.hasOwnProperty('message')) {
          message = response.error.message;
        }
        else { // Get the first message
          const errors = Object.keys(response['error']['errors']);

          if (errors.length) {
            message = response['error']['errors'][errors[0]];
          }
        } // If only one error message
      } else if (response.hasOwnProperty('error')) {
        message = response.error.error !== undefined ? response.error.error : message;
      }
      result['message'] = message;
      // console.error(`${operation} failed: ${response.error.code} : ${response.error.error}`);
      if (result['status'] !== 403) {
        this.notification.show(message, 'error', 'Información');
      }
      return of(result as T);
    };
  }

  updateHeaders(header: string, value: string): void {
    this.httpHeaders = this.httpHeaders.set(header, value);
  }

  removeHeader(name: string): void {
    this.httpHeaders = this.httpHeaders.delete(name);
  }

  execute(
    collection: string,
    data: object,
    method = 'GET',
    headers = this.httpHeaders
  ): Observable<any> {
    const service = this.api + collection;
    const options = { body: data, headers: headers };
    return this.http.request(method, service, options).pipe(
      catchError(this.handleError(collection, { success: false }))
    );
  }
}
