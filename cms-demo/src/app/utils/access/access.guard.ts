import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//Handler session
import { SessionService } from '../session/session.service';
@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private router: Router, private session: SessionService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.session.inSession()) {
      return true;
    }
    this.router.navigate(['/']);
    return true;
  }
  
}
