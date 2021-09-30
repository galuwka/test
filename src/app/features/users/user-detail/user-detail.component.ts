import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {UserData} from "../../../core/models/user-data";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
    @Input() userData!: UserData;
    @Output() deleteUserEvent = new EventEmitter<number>();
    @Output() editUserEvent = new EventEmitter<UserData>();

    constructor() {
    }

    ngOnInit(): void {
    }

}
