import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Marcos',
      surname: 'Rodriguez',
      email: 'mark@mail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Julian',
      surname: 'Perez',
      email: 'jperez@mail.com',
      password: '123456',
    },
  ];
  constructor() { }
  getUsers(): User[] {
    return this.users;
  }

   createUser(user: User): void {
     this.users = [
       ...this.users,
       user,
     ]
   }
   deleteUserById(user: User): void {
     this.users = [
       ...this.users,
       user,
     ]
   }
   updateUserById(user: User): void {
     this.users = [
       ...this.users,
       user,
     ]
   }
}
