import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = sessionStorage.getItem('token') || localStorage.getItem('token');
  if (_token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${_token}`  // Attach token to headers
      }
    });
    return next(clonedRequest);
  }
  return next(req);  // No token, proceed with the request as is
};
