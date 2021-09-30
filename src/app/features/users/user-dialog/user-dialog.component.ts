import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserData} from "../../../core/models/user-data";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss'],
    providers: [DatePipe]
})
export class UserDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: UserData,
        private date: DatePipe) {
    }

    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    birthDate: string | null | undefined;

    ngOnInit(): void {
        const {firstName, lastName, email, birthDate} = this.data;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = this.date.transform(new Date(birthDate), 'yyyy-MM-dd');
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
