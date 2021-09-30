import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {UserData} from "../../../core/models/user-data";
import {AppState} from "../../../store";
import {usersListData} from "../../../store/users/users.selectors";
import {userAdd, userDelete, userEdit, usersListGet} from "../../../store/users/users.action";
import {UserDialogComponent} from "../user-dialog/user-dialog.component";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    userList$: Observable<UserData[]> | undefined;

    constructor(private store: Store<AppState>, public dialog: MatDialog) {
        this.store.dispatch(usersListGet())
    }

    ngOnInit(): void {
        this.userList$ = this.store.select(usersListData);
    }

    trackUserById(index: number, user: UserData): number {
        return user.id;
    }

    handleDeleteUserEvent(event: number): void {
        this.store.dispatch(userDelete({userId: event}));
    }

    handleAddUser() {
        const dialogRef = this.dialog.open(UserDialogComponent, {
            width: '250px',
            data: {
                firstName: '',
                lastName: '',
                email: '',
                birthDate: ''
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.store.dispatch(userAdd({user: {...result, ...{id: Math.random()}}}))
        });
    }

    handleEditUserEvent(event: UserData) {
        const dialogEditRef = this.dialog.open(UserDialogComponent, {
            width: '250px',
            data: event
        });

        dialogEditRef.afterClosed().subscribe(result => {
            this.store.dispatch(userEdit({userChanged: {...result, ...{id: event.id}}}))
        });
    }

}
