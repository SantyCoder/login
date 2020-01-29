import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Global Services
import { RequestService } from '../../request/request.service';
import { NotificationService } from '../../common/notification/notification.service';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  id: string;

  token: string;

  name: string;

  image = 'assets/images/avatar.svg';

  role = '';

  email = '';

  constructor(
    private router: Router,
    private requestService: RequestService,
    private notification: NotificationService
  ) {
    this.id = localStorage.getItem('id');
    this.token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');
    this.image = localStorage.getItem('image');
    this.role = localStorage.getItem('role');
    this.email = localStorage.getItem('email');
  }

  public inSession(): boolean {
    if (this.token !== 'null' && this.token !== null && this.token !== undefined) {
      return true;
    }
    return false;
  }

  public create(credentials: any): void {
    localStorage.setItem("token", credentials["access"]["tokenJWT"]);
    localStorage.setItem('id', credentials['id']);
    localStorage.setItem('name', credentials['name']);
    localStorage.setItem('role', credentials['roles'][0]);
    localStorage.setItem('email', credentials['email']);
    localStorage.setItem('highwayAssigned', credentials['highways'][0]);
    // TODO: Remove
    this.token = credentials['access']['tokenJWT'];
    this.id = credentials['id'];
    this.name = credentials['name'];
    this.role = credentials['roles'][0];
    this.email = credentials['email'];
    // Set token      
    this.requestService.updateHeaders('Authorization', `Bearer ${this.token}`);
    // Load Dashboard component
    this.router.navigate(['/dashboard']);
  }

  public destroy(): void {
    this.id = null;
    this.token = null;
    this.name = null;
    this.image = null;
    this.role = null;
    this.email = null;
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("image");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    // Remove authentication
    this.requestService.removeHeader('Authorization');
    //- 
    this.router.navigate(['login']);
  }

  public getToken(): string {
    return this.token;
  }
}
