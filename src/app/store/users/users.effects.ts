import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {ApiUsersService} from "../../core/services/api-users.service";
import {UserData} from "../../core/models/user-data";
import {usersListGet, usersListGetFail, usersListGetSuccess} from "./users.action";

@Injectable()
export class UsersListEffects {
    constructor(private actions$: Actions, private apiUsersService: ApiUsersService) {}

    usersList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usersListGet),
            switchMap(() =>
                this.apiUsersService.getAllUsers().pipe(
                    map((usersList: UserData[]) => usersListGetSuccess({ usersList })),
                    catchError(() => of(usersListGetFail()))
                )
            )
        )
    );
}