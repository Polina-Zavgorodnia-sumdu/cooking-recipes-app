import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard';
import { AuthService } from '../../auth/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authMock: any;

  beforeEach(() => {
    authMock = {
      isAuthenticated: () => true
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authMock }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('має дозволяти доступ при логіні', () => {
    expect(guard.canActivate()).toBeTrue();
  });

  it('має перенаправляти на /login при відсутності логіну', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    authMock.isAuthenticated = () => false;
    guard = TestBed.inject(AuthGuard);

    expect(guard.canActivate()).toBeFalse();
    expect(spy).toHaveBeenCalledWith(['/login']);
  });
});
