import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    isLoggedIn = false;

    canActivate(): boolean {
        return this.isLoggedIn;
    }
}