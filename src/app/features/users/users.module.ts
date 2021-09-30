import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";
import {ScrollingModule} from "@angular/cdk/scrolling";



@NgModule({
    declarations: [
        UsersListComponent,
        UserDetailComponent,
        UserDialogComponent
    ],
    exports: [
        UsersListComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        MatDialogModule,
        MatInputModule,
        MatBadgeModule,
        ScrollingModule
    ],
    entryComponents: [UserDialogComponent]
})
export class UsersModule { }
