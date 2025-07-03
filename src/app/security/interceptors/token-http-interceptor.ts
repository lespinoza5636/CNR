import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../../auth.service";

export const tokenHttpInterceptor: HttpInterceptorFn = (req, next) => {
     const auth = inject(AuthService);
    const accessToken = auth.getToken();
    if (accessToken) {
        req = req.clone({
            setHeaders: { Authorization: `Bearer ${accessToken}` }
        });
    }

    return next(req);
}