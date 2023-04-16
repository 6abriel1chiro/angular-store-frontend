import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CookieService} from "ngx-cookie-service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

import jwt_decode from 'jwt-decode';

interface DecodedToken {
  exp: number;
  // Add any other properties that you're decoding from the token
}

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token: string = this.cookieService.get('token');
    let req = request;
    if (token) {
      // Check if the token is still valid and not expired
      const decodedToken = jwt_decode(token) as DecodedToken;
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        this.cookieService.delete('token');
        this.router.navigateByUrl('/login');
        return throwError('Token expired');
      }
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.cookieService.delete('token');
          this.router.navigateByUrl('/login');
        }
        return throwError(err);
      })
    );
  }
}