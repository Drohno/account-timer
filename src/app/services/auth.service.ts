import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  getUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  setUser(user: User): void {
    this.user = user;
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.setUser(user);
        this.router.navigate(['/timer']);
      } else {
        this.setUser(null);
        this.router.navigate(['/login']);
      }
    });
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.afAuth.signOut()
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }
}
