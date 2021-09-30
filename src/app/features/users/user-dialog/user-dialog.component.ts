import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserData} from "../../../core/models/user-data";

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: UserData) {
    }

    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    birthDate: string | undefined;

    ngOnInit(): void {
        const {firstName, lastName, email, birthDate} = this.data;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = birthDate;

    }

    save() {
        this.dialogRef.close({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
