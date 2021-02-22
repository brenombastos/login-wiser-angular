import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: User): void {

    if (usuario.email === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/ok']);

    } else {
      this.usuarioAutenticado = false;
      this.router.navigate(['/fail']);
    }
  }

}
