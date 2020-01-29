import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { tap } from 'rxjs/operators';
// Handler service
import { RequestService } from '../../request/request.service';
import { SessionService } from 'src/app/utils/session/session.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
     * @param requestService Reference to Request Service
     * @class AuthService
     * @constructor
     */
  constructor(
    private requestService: RequestService,
    private session: SessionService
  ) { }
  private toQueryString(params): string {
    let queryString = '';
    let first = true;
    const keys = Object.keys(params);
    for (const key of keys) {
      if (first) {
        queryString += '?';
        first = false;
      }
      else {
        queryString += '&';
      }
      queryString += `${key}=${params[key]}`;
    }
    return queryString;
  }
  /**
 * Send form model to API request
 * @param credentials {object} Login info data
 */
  login(credentials: Object): Observable<any> {
    let service = 'loginAD';
    service = service + this.toQueryString(credentials);
    return this.requestService.execute(service, credentials, 'GET');
  }
}
