import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard Security Test', () => {
    let guard: AuthGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(AuthGuard);
    });

    it('should block navigation if not logged in', () => {
        guard.isLoggedIn = false;
        expect(guard.canActivate()).toBeFalse();
    });

    it('should allow navigation if logged im', () => {
        guard.isLoggedIn = true;
        expect(guard.canActivate()).toBeTrue();
    })
})