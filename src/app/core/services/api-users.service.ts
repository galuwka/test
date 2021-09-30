import { Injectable } from '@angular/core';
import * as users from '../mock/MOCK_DATA.json';
import {Observable, of} from "rxjs";
import {UserData} from "../models/user-data";

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

private usersData = Array.from(users);

    getAllUsers(): Observable<UserData[]> {
        return of(this.usersData);
    }
}
