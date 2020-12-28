import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  set(key, value) {
    return localStorage.setItem(key, value);
  }

  get(key) {
    return localStorage.getItem(key);
  }

  destroy(key) {
    return localStorage.removeItem(key);
  }
}
