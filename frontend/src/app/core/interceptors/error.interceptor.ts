import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const toast = inject(ToastService);

  return next(req).pipe(
    catchError((err) => {
      const message = err?.error?.message || 'Something went wrong. Please try again.';
      if (err.status === 401) {
        toast.show('Your session has expired. Please log in again.', 'error');
        auth.logout();
      } else {
        toast.show(message, 'error');
      }
      return throwError(() => err);
    })
  );
};
